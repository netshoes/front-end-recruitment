'use strict';

import React from 'react';

import ProductPrice from '../components/ProductPrice';

let { PropTypes } = React;

let BagFooter = React.createClass({

  propTypes: {
    subtotal: PropTypes.object
  },

  render() {
    var { subtotal } = this.props;

    return (
      <div className="Bag-footer">
        <span className="Bag-footer-label">Subtotal</span>
        <span className="Bag-footer-price">
          <ProductPrice
              price={subtotal.price}
              currency={subtotal.currencyFormat}
              installments={subtotal.installments}
              gold={true} />
        </span>
      </div>
    );
  }

});

export default BagFooter;
