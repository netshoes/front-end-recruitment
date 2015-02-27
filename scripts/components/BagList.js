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
    if (this.props.bagItems.length > 0) {
      return _.map(this.props.bagItems, (item) => {
        return (<BagListItem key={item.sku} bagItem={item} />);
      });
    } else {
      return (
        <span className="BagList-noItems">
          Sua sacola ainda não tem itens
        </span>
      );
    }
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
