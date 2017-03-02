'use strict';

import React from 'react';
import FluxComponent from 'flummox/component';

import EntryPoint from '../components/EntryPoint';
import ProductList from '../components/ProductList';
import Bag from '../components/Bag';

import ProductActions from '../actions/ProductActions';

let HomeEntry = React.createClass({

  contextTypes: {
    flux: React.PropTypes.any.isRequired
  },
  
  componentDidMount() {
    this.context.flux.addListener('dispatch', payload => console.log('dispatch: ', payload));
    this.context.flux.getActions('products').getAllProducts();
  },

  render() {
    return (
      <EntryPoint name="Home">
        <FluxComponent connectToStores={['products']}>
          <ProductList />
        </FluxComponent>

        <FluxComponent connectToStores={['bagItems']}>
          <Bag />
        </FluxComponent>
      </EntryPoint>
    );
  }

});

export default HomeEntry;
