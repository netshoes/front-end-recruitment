'use strict';

import { Store } from 'flummox';
import _ from 'lodash';

class BagStore extends Store {

  constructor(flux) {
    super();

    let bagActionIds = flux.getActionIds('bagItems');

    this.register(bagActionIds.addItem, this.handleAddItem);

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

  handleAddItem(item) {
    let bagItems = this.state.bagItems;

    // item already in the bag. Increasing quantity
    if (_.has(bagItems, item.sku)) {
      bagItems[item.sku].quantity++;
    }
    // not in the bag. Adding it
    else {
      item.quantity = 1;
      bagItems[item.sku] = item;
    }

    this.setState({
      bagItems: bagItems,
      quantity: this.getQuantity(),
      subtotal: this.getSubtotal()
    });
  }

  getAllBagItems() {
    return this.state.bagItems;
  }

  getQuantity() {
    return _.reduce(this.state.bagItems, (sum, item) => sum + item.quantity, 0);
  }

  getAllowedInstallments() {
    return _.min(_.pluck(this.state.bagItems, 'installments'));
  }

  getSubtotalPrice() {
    return _.reduce(this.state.bagItems, (sum, item) => {
      return sum + (item.price * item.quantity);
    }, 0);
  }

  getSubtotal() {
    return {
      'price': this.getSubtotalPrice(),
      'installments': this.getAllowedInstallments(),
      'currencyFormat': 'R$'
    }
  }

}

export default BagStore;
