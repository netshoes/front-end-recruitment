'use strict';

import { Flummox } from 'flummox';

import BagActions from './actions/BagActions';

import ProductStore from './stores/ProductStore';
import BagStore from './stores/BagStore';

class FluxClass extends Flummox {
  constructor() {
    super();

    this.createActions('bagItems', BagActions);

    this.createStore('products', ProductStore, this);
    this.createStore('bagItems', BagStore, this);
  }
}

export default FluxClass;
