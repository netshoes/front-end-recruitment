'use strict';

import React from 'react';
import classnames from 'classnames';
import FluxComponent from 'flummox/component';

import BagHeader from '../components/BagHeader';
import BagList from '../components/BagList';
import BagFooter from '../components/BagFooter';

import flux from '../flux';

let { PropTypes } = React;

let Bag = React.createClass({

  propTypes: {
    bagItems: PropTypes.object,
    quantity: PropTypes.number,
    subtotal: PropTypes.object
  },

  onBuyClick(e) {
    let bagActions = flux.getActions('bagItems');

    bagActions.resetBag();
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

        <FluxComponent flux={flux} connectToStores={['bagItems']}>
          <BagList />
        </FluxComponent>

        <BagFooter subtotal={this.props.subtotal} />
        <a
          href="#buy"
          className={buyButtonClasses}
          onClick={this.onBuyClick}>
          Comprar
        </a>
      </div>
    );
  }

});

export default Bag;
