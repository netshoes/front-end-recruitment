'use strict';

import React from 'react';
import FluxComponent from 'flummox/component';

import EntryPoint from '../components/EntryPoint';
import ProductList from '../components/ProductList';

let HomeEntry = React.createClass({

	render() {
		return (
			<EntryPoint name="Home">
        <FluxComponent connectToStores={['products']}>
          <ProductList />
        </FluxComponent>
			</EntryPoint>
		)
	}

});

export default HomeEntry;
