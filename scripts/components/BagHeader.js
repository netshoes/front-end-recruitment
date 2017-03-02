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
        <span className="Bag-icon">
          <span className="Bag-badge">{this.props.quantity}</span>
        </span>
        <h2 className="Bag-title">Sacola</h2>
      </header>
    );
  }

});

export default BagHeader;
