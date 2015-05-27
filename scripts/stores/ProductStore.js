'use strict';

import { Store } from 'flummox';
import _ from 'lodash';

function noop() {};

class ProductStore extends Store {

  constructor(flux) {
    super();

    let productActionsIds = flux.getActionIds('products');

    this.registerAsync(productActionsIds.getAllProducts, noop, this.onProductsFetched);

    this.state = {
      products: []
    };
  }

  // TODO: error hanling
  onProductsFetched(data) {
    this.setState({
      products: data.products
    });
  }

  getAllProducts() {
    return this.state.products;
  }

}

ProductStore.serialize = (state) => JSON.stringify(state);
ProductStore.deserialize = (state) => JSON.parse(state);

export default ProductStore;
