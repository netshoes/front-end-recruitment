'use strict';

import React from 'react';

import ProductThumb from '../components/ProductThumb';
import ProductPrice from '../components/ProductPrice';
import MicroHr from '../components/MicroHr';

import flux from '../flux';

let { PropTypes } = React;

let ProductItem = React.createClass({

  propTypes: {
    product: PropTypes.object.isRequired,
  },

  onProductItemLinkClick(e) {
    e.preventDefault();
    let bagActions = flux.getActions('bagItems');

    bagActions.addItem(this.props.product);
  },

  render() {
    let { sku, title, price, currencyFormat, installments } = this.props.product;
    return (
      <div className="ProductItem">
        <a
          href="#"
          className="ProductItem-link"
          onClick={this.onProductItemLinkClick} >

          <ProductThumb sku={sku} title={title} />
          <div className="ProductItem-info">
            <h3 className="ProductItem-title">{title}</h3>
            <MicroHr />
            <span className="ProductItem-price">
              <ProductPrice
                price={price}
                currency={currencyFormat}
                installments={installments}
                highlight={true} />
              </span>
          </div>

        </a>
      </div>
    );
  }

});

export default ProductItem;
