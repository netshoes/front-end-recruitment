'use strict';

import { Flummox } from 'flummox';

import ProductStore from './stores/ProductStore';

class Flux extends Flummox {
	constructor() {
		super();

		this.createStore('products', ProductStore, this);
	}
}

export default Flux;
