'use strict';

import React from 'react';
import classnames from 'classnames';

import formatMoney from '../utils/formatMoney';

let { PropTypes } = React;

let ProductPrice = React.createClass({

  propTypes: {
    price: PropTypes.number.isRequired,
    currency: PropTypes.string.isRequired,
    installments: PropTypes.number,
    smallInstallments: PropTypes.bool,
    highlight: PropTypes.bool
  },

  getDefaultProps() {
    return {
      installments: 0,
      smallInstallments: false,
      highlight: false
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

    let productPriceClasses = classnames({
      'ProductPrice': true,
      'ProductPrice--highlight': this.props.highlight
    });

    let installmentsClasses = classnames({
      'ProductPrice-installments': true,
      'ProductPrice-installments--small': this.props.smallInstallments
    });

    return (
      <div className={productPriceClasses}>
        <span className="ProductPrice-value">
          {currency}
          &nbsp;
          <span className="ProductPrice-highlight">{intPrice}</span>
          {`,${decPrice}`}
        </span>

        {hasInstallments &&
          <span className={installmentsClasses}>
            {`ou ${installments} x ${currency} ${installmentPrice.full}`}
          </span>
        }
      </div>
    );
  }

});

export default ProductPrice;
