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

    if (subtotal.price > 0) {
      return (
        <div className="Bag-footer">
          <span className="Bag-footer-label">Subtotal</span>
          <span className="Bag-footer-price">
            <ProductPrice
                price={subtotal.price}
                currency={subtotal.currencyFormat}
                installments={subtotal.installments}
                smallInstallments={true}
                gold={true} />
          </span>
        </div>
      );
    } else {
      return (
        <div className="Bag-footer"></div>
      );
    }
  }

});

export default BagFooter;
