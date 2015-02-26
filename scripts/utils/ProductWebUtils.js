'use strict';

import request from 'superagent';

// all WebUtils fetching methods return a Promise like request object
let ProductWebUtils = {
  getAllProducts() {
    return request
      .get('/data/products.json')
  }
}

export default ProductWebUtils;
