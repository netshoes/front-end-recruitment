'use strict';

import React from 'react';
import _ from 'lodash';

import Collection from '../components/Collection';
import CollectionItem from '../components/CollectionItem';
import ProductItem from '../components/ProductItem';

let { PropTypes } = React;

let ProductList = React.createClass({

  propTypes: {
    products: PropTypes.array
  },

  renderProducts() {
    return _.map(this.props.products, (product) => {
      return (
        <CollectionItem>
          <ProductItem product={product} mode="collection" />
        </CollectionItem>
      );
    });
  },

  render() {
    return (
      <Collection>
        {this.renderProducts()}
      </Collection>
    )
  }

});

export default ProductList;
