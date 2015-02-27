'use strict';

import React from 'react';

import ProductThumb from '../components/ProductThumb';
import ProductPrice from '../components/ProductPrice';

import flux from '../flux';

let { PropTypes } = React;

let BagListItem = React.createClass({

  propTypes: {
    bagItem: PropTypes.object.isRequired,
  },

  onRemoveItemClick() {
    let bagActions = flux.getActions('bagItems');

    bagActions.removeItem(this.props.bagItem.sku);
  },

  render() {
    let bagItem = this.props.bagItem;
    return (
      <div className="BagList-item">
        <ProductThumb
          sku={bagItem.sky}
          title={bagItem.title}
          size="square" />

        <button onClick={this.onRemoveItemClick} >&times;</button>
      </div>
    );
  }

});

export default BagListItem;
