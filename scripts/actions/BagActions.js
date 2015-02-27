'use strict';

import { Actions } from 'flummox';

class BagActions extends Actions {

  addItem(item) {
    return item;
  }

  removeItem(sku) {
    return sku;
  }

  resetBag() {
    return;
  }

}

export default BagActions;
