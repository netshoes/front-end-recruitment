'use strict';

import { Actions } from 'flummox';
import ProductWebUtils from '../utils/ProductWebUtils';

class ProductActions extends Actions {

  getAllProducts() {
    return ProductWebUtils.getAllProducts();
  }

}

export default ProductActions;
