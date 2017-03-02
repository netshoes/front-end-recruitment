'use strict';

import { Store } from 'flummox';
import _ from 'lodash';

function noop() {};

class BagStore extends Store {

  constructor(flux) {
    super();

    let bagActionIds = flux.getActionIds('bagItems');

    this.registerAsync(bagActionIds.addItem, this.handleAddItem);
    this.registerAsync(bagActionIds.removeItem, this.handleRemoveItem);
    this.register(bagActionIds.resetBag, this.handleResetBag);

    this.ProductStore = flux.getStore('products');

    this.state = {
      bagItems: {},
      quantity: 0,
      subtotal: {
        price: 0,
        installments: 0,
        currencyFormat: 'R$'
      }
    };
  }

  handleAddItem(data) {
    let sku = data.actionArgs[0];

    // wait for ProductStore if it handles this action
    this.waitFor(this.ProductStore);

    let bagItems = this.state.bagItems;

    // item already in the bag. Increasing quantity
    if (_.has(bagItems, sku)) {
      bagItems[sku].quantity++;
    }
    // not in the bag. Adding it
    else {
      let item = this.ProductStore.getProduct(sku);
      item.quantity = 1;
      bagItems[sku] = item;
    }

    this.setState({
      bagItems: bagItems,
      quantity: this.getQuantity(bagItems),
      subtotal: this.getSubtotal(bagItems)
    });
  }

  handleRemoveItem(sku) {
    let bagItems = this.state.bagItems;
    bagItems = _.omit(bagItems, sku);

    this.setState({
      bagItems: bagItems,
      quantity: this.getQuantity(bagItems),
      subtotal: this.getSubtotal(bagItems)
    });
  }

  handleResetBag() {
    let bagItems = {};

    this.setState({
      bagItems: bagItems,
      quantity: this.getQuantity(bagItems),
      subtotal: this.getSubtotal(bagItems)
    });
  }

  getAllBagItems() {
    return this.state.bagItems;
  }

  getQuantity(bagItems) {
    return _.reduce(bagItems, (sum, item) => sum + item.quantity, 0);
  }

  getAllowedInstallments(bagItems) {
    if (_.isEmpty(bagItems)) {
      return 0;
    }
    else {
      return _.min(_.pluck(bagItems, 'installments'));
    }
  }

  getSubtotalPrice(bagItems) {
    return _.reduce(bagItems, (sum, item) => {
      return sum + (item.price * item.quantity);
    }, 0);
  }

  getSubtotal(bagItems) {
    return {
      'price': this.getSubtotalPrice(bagItems),
      'installments': this.getAllowedInstallments(bagItems),
      'currencyFormat': 'R$'
    };
  }

}


BagStore.serialize = (state) => JSON.stringify(state);
BagStore.deserialize = (state) => JSON.parse(state);

export default BagStore;
