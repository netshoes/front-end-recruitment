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
      .get('/api/products')
      .end(_.bind(this.onDataFetched, this));
  }

  // TODO: better error hanling
  onDataFetched(err, res) {
    if (err) { return; }

    this.setState({
      products: res.products
    });
  }

  getAllProducts() {

    return
  }

}

export default ProductStore;
