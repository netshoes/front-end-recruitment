'use strict';

import React from 'react';
import FluxComponent from 'flummox/component';

import EntryPoint from '../components/EntryPoint';
import ProductList from '../components/ProductList';
import Bag from '../components/Bag';

let HomeEntry = React.createClass({

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
    )
  }

});

export default HomeEntry;
