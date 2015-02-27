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
        <div className="BagList-thumb">
          <ProductThumb
            sku={bagItem.sku}
            title={bagItem.title}
            size="square" />
        </div>

        <div className="BagList-info">
          <span className="BagList-title">
            {bagItem.title}
          </span>
          <span className="BagList-details">
            {bagItem.availableSizes[0]} | {bagItem.style}
          </span>
          <span className="BagList-quantity">
            Quantidade: {bagItem.quantity}
          </span>
        </div>

        <div className="BagList-removeAndPrice">
          <button
            className="BagList-remove"
            onClick={this.onRemoveItemClick} />

          <div className="BagList-price">
            <ProductPrice
              price={bagItem.price}
              currency={bagItem.currencyFormat} />
          </div>

        </div>

      </div>
    );
  }

});

export default BagListItem;
