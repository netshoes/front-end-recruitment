'use strict';

import { Store } from 'flummox';
import _ from 'lodash';

import ProductWebUtils from '../utils/ProductWebUtils';

class ProductStore extends Store {

  constructor(flux) {
    super();

    // sync data
    this.state = {
      products: []
    };

    // async data fetching
    ProductWebUtils.getAllProducts()
      .end(_.bind(this.onDataFetched, this));
  }

  // TODO: error hanling
  onDataFetched(res) {
    this.setState({
      products: res.body.products
    });
  }

  getAllProducts() {
    return this.state.products;
  }

}

export default ProductStore;
