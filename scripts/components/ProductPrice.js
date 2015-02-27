'use strict';

import React from 'react';
import formatMoney from '../utils/formatMoney';

let { PropTypes } = React;

let ProductPrice = React.createClass({

  propTypes: {
    price: PropTypes.number.isRequired,
    currency: PropTypes.string.isRequired,
    installments: PropTypes.number
  },

  getDefaultProps() {
    return {
      installments: 0
    };
  },

  render() {
    let { price, currency, installments } = this.props

    let { int: intPrice, dec: decPrice } = formatMoney(price);
    let hasInstallments = installments > 0;

    let installmentPrice;
    if (hasInstallments) {
      installmentPrice = formatMoney(price / installments);
    }

    return (
      <div className="ProductPrice ProductItem-price">
        <span className="ProductPrice-value">
          {currency}
          &nbsp;
          <span className="ProductPrice-highlight">{intPrice}</span>
          {`,${decPrice}`}
        </span>

        {hasInstallments &&
          <span className="ProductPrice-installments">
            {`ou ${installments} x ${currency} ${installmentPrice.full}`}
          </span>
        }
      </div>
    );
  }

});

export default ProductPrice;
