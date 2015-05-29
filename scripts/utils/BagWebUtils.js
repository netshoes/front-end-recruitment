'use strict';

import request from 'kakuna';

let baseUrl;
if (typeof window === 'undefined') {
  baseUrl = 'http://127.0.0.1:3000';
} else {
  baseUrl = 'http://127.0.0.1:3000';
}

// all WebUtils fetching methods return a Promise
let BagWebUtils = {
  get() {
    return request
      .get(`${baseUrl}/api/bag`)
      .end()
  },

  post(sku) {
    return request
      .post(`${baseUrl}/api/bag/${sku}`)
      .end()
  },

  delete(sku) {
    return request
      .delete(`${baseUrl}/api/bag/${sku}`)
      .end()
  }
};

export default BagWebUtils;
