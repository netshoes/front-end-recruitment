'use strict';

import React from 'react';
import classnames from 'classnames';

import ProductThumb from '../components/ProductThumb';
import ProductPrice from '../components/ProductPrice';

import flux from '../flux';

let { PropTypes } = React;

let BagListItem = React.createClass({

  propTypes: {
    bagItem: PropTypes.object.isRequired,
  },

  getInitialState() {
    return {
      'hoveringRemove': false
    };
  },

  onRemoveItemClick() {
    let bagActions = flux.getActions('bagItems');

    bagActions.removeItem(this.props.bagItem.sku);
  },

  onRemoveItemMouseEnter() {
    this.setState({
      'hoveringRemove': true
    });
  },

  onRemoveItemMouseLeave() {
    this.setState({
      'hoveringRemove': false
    });
  },

  render() {
    let bagItem = this.props.bagItem;

    let bagListItemClasses = classnames({
      'BagList-item': true,
      'BagList-item--hoveringRemove': this.state.hoveringRemove
    });

    return (
      <div className={bagListItemClasses}>
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
            onClick={this.onRemoveItemClick}
            onMouseEnter={this.onRemoveItemMouseEnter}
            onMouseLeave={this.onRemoveItemMouseLeave} />

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
