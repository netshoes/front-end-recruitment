'use strict';

import React from 'react';

import BagHeader from '../components/BagHeader';
import BagFooter from '../components/BagFooter';

let { PropTypes } = React;

let Bag = React.createClass({

  propTypes: {
    bagItems: PropTypes.object,
    quantity: PropTypes.number,
    subtotal: PropTypes.object
  },

  render() {
    return (
      <div className="Bag">
        <BagHeader quantity={this.props.quantity} />
        <BagFooter subtotal={this.props.subtotal} />
        {console.log(this.props)}
      </div>
    );
  }

});

export default Bag;
