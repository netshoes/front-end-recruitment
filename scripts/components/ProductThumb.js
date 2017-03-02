'use strict';

import React from 'react';

let { PropTypes } = React;

let sizes = {
  'portrait': {
    width: '180',
    height: '230'
  },
  'square': {
    width: '50',
    height: '50'
  }
};

let ProductThumb = React.createClass({

  propTypes: {
    sku: PropTypes.number.isRequired,
    title: PropTypes.string,
    size: PropTypes.oneOf(['portrait', 'square'])
  },

  getDefaultProps() {
    return {
      title: '',
      size: 'portrait'
    };
  },

  render() {
    let { sku, title, size } = this.props;
    let imgSize = sizes[size];

    return (
      <div className="ProductItem-thumb">
        <img
          src={`/images/products/${size}/${sku}.jpg`}
          alt={title}
          width={imgSize.width}
          height={imgSize.height} />
      </div>
    );
  }

});

export default ProductThumb;
