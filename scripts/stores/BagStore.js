'use strict';

import { Store } from 'flummox';
import _ from 'lodash';

class BagStore extends Store {

  constructor(flux) {
    super();

    let bagActionIds = flux.getActionIds('bagItems');

    this.register(bagActionIds.addItem, this.handleAddItem);

    this.state = {
      bagItems: []
    };
  }

  handleAddItem(item) {
    let bagItems = this.state.bagItems;
    bagItems.push(item);

    this.setState({
      bagItems: bagItems
    });
  }

  getAllBagItems() {
    return this.state.bagItems;
  }

}

export default BagStore;
