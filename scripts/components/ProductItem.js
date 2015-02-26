'use strict';

import React from 'react';

import ProductThumb from '../components/ProductThumb';
import ProductPrice from '../components/ProductPrice';
import MicroHr from '../components/MicroHr';

let { PropTypes } = React;

let ProductItem = React.createClass({

  propTypes: {
    product: PropTypes.object.isRequired,
    mode: PropTypes.oneOf(['collection', 'list']).isRequired
  },

  renderByMode() {
    let { mode } = this.props;
    let result;

    if (mode === 'collection') {
      return this.renderAsCollection();
    } else if (mode === 'list') {
      return this.renderAsList();
    }
  },

  renderAsCollection() {
    let { sku, title, price, currencyFormat, installments } = this.props.product;

    return (
      <div>
        <ProductThumb sku={sku} title={title} />
        <div className="ProductItem-info">
          <h3 className="ProductItem-title">{title}</h3>
          <MicroHr />
          <ProductPrice
            price={price}
            currency={currencyFormat}
            installments={installments} />
        </div>
      </div>
    );
  },

  render() {
    return (
      <div className="ProductItem">
        {this.renderByMode()}
      </div>
    );
  }

});

export default ProductItem;
