'use strict';

import React from 'react';

let { PropTypes } = React;

let BagHeader = React.createClass({

  propTypes: {
    quantity: PropTypes.number
  },

  getDefaultProps() {
    return {
      quantity: 0
    };
  },

  render() {
    return (
      <header className="Bag-header">
        <h2 className="Bag-title">{`Sacola (${this.props.quantity})`}</h2>
      </header>
    );
  }

});

export default BagHeader;
