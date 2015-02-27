'use strict';

import React from 'react';

import BagHeader from '../components/BagHeader';

let { PropTypes } = React;

let Bag = React.createClass({

  propTypes: {
    bagItems: PropTypes.array.isRequired,
    quantity: PropTypes.number.isRequired
  },

  render() {
    return (
      <div className="Bag">
        <BagHeader quantity={this.props.quantity} />
        {console.log(this.props.bagItems)}
      </div>
    );
  }

});

export default Bag;
