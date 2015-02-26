'use strict';

import React from 'react';
let { PropTypes } = React;

let ProductList = React.createClass({

  propTypes: {
    products: PropTypes.array
  },

  render() {
    return (
      <span>{this.props.products.length}</span>
    )
  }

});

export default ProductList;
