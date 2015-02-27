'use strict';

import React from 'react';

import BagHeader from '../components/BagHeader';

let { PropTypes } = React;

let Bag = React.createClass({

  propTypes: {
    bagItems: PropTypes.object,
    quantity: PropTypes.number
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
