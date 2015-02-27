'use strict';

import React from 'react';
import classnames from 'classnames';

import BagHeader from '../components/BagHeader';
import BagFooter from '../components/BagFooter';

let { PropTypes } = React;

let Bag = React.createClass({

  propTypes: {
    bagItems: PropTypes.object,
    quantity: PropTypes.number,
    subtotal: PropTypes.object
  },

  onBuyClick(e) {
    e.preventDefault();
  },

  render() {
    let buyButtonClasses = classnames({
      'Button': true,
      'Button--dark': true,
      'Button--fill': true,
      'Button--disabled': this.props.quantity === 0
    });

    return (
      <div className="Bag">
        <BagHeader quantity={this.props.quantity} />
        <BagFooter subtotal={this.props.subtotal} />
        <a
          href="#buy"
          className={buyButtonClasses}
          onClick={this.onBuyClick}>
          Comprar
        </a>
        {console.log(this.props)}
      </div>
    );
  }

});

export default Bag;
