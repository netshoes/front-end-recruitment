'use strict';

import request from 'kakuna';

let baseUrl;
if (typeof window === 'undefined') {
  baseUrl = 'http://127.0.0.1:3000';
} else {
  baseUrl = 'http://127.0.0.1:3000';
}

// all WebUtils fetching methods return a Promise
let ProductWebUtils = {
  getAllProducts() {
    return fetch(`${baseUrl}/data/products.json`)
      .then(products => products.json());
  }
};

export default ProductWebUtils;
