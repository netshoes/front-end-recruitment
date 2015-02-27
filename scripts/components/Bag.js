'use strict';

import React from 'react';

let { PropTypes } = React;

let Bag = React.createClass({

  propTypes: {
    bagItems: PropTypes.array
  },

  render() {
    return (
      <div className="Bag">
        <h1>Bag</h1>
        {this.props.bagItems.length}
      </div>
    );
  }

});

export default Bag;
