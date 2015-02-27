'use strict';

import React from 'react';
import _ from 'lodash';

import BagListItem from '../components/BagListItem';

let { PropTypes } = React;

let BagList = React.createClass({

  propTypes: {
    bagItems: PropTypes.object
  },

  renderItems() {
    return _.map(this.props.bagItems, (item) => {
      return (<BagListItem key={item.sku} bagItem={item} />);
    });
  },

  render() {
    return (
      <div className="BagList">
        {this.renderItems()}
      </div>
    );
  }

});

export default BagList;
