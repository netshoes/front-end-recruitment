'use strict';

import React from 'react';

import ProductThumb from '../components/ProductThumb';
import ProductPrice from '../components/ProductPrice';
import MicroHr from '../components/MicroHr';

let { PropTypes } = React;

let ProductItem = React.createClass({

  contextTypes: {
    flux: PropTypes.any.isRequired
  },

  propTypes: {
    product: PropTypes.object.isRequired,
  },

  onBuySubmit(e) {
    e.preventDefault();
    let bagActions = this.context.flux.getActions('bagItems');

    bagActions.addItem(this.props.product.sku);
  },

  render() {
    let { sku, title, price, currencyFormat, installments } = this.props.product;
    return (
      <div className="ProductItem">
        <a
          href="#"
          className="ProductItem-link" >
          <ProductThumb sku={sku} title={title} />
        </a>

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

        <form className="ProductItem-form" method="POST" action="/product" onSubmit={this.onBuySubmit}>
          <input type="hidden" name="sku" value={sku} />
          <button className="ProductItem-buy" type="Submit">Comprar</button>
        </form>
      </div>
    );
  }

});

export default ProductItem;
