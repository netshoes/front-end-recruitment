'use strict';

import { Actions } from 'flummox';
import BagWebUtils from '../utils/BagWebUtils';

class BagActions extends Actions {

  addItem(sku) {
    return BagWebUtils.post(sku);
  }

  removeItem(sku) {
    return BagWebUtils.delete(sku);
  }

  resetBag() {
    return {};
  }

}

export default BagActions;
