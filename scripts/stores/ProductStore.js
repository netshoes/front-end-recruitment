'use strict';

import { Store } from 'flummox';
import request from 'superagent';
import _ from 'lodash';

class ProductStore extends Store {

  constructor(flux) {
    super();

    // sync data
    this.state = {
      products: []
    };

    // async data fetching
    request
      .get('/data/products.json')
      .end(_.bind(this.onDataFetched, this));
  }

  // TODO: error hanling
  onDataFetched(res) {
    this.setState({
      products: res.body.products
    });
  }

  getAllProducts() {

    return
  }

}

export default ProductStore;
