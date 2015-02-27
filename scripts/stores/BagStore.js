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
    this.setState({
      bagItems: this.state.bagItems.push(item)
    });
  }

  getAllBagItems() {
    return this.state.bagItems;
  }

}

export default BagStore;
