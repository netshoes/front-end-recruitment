'use strict';

import React from 'react';

let CollectionItem = React.createClass({

  render() {
    return (
      <div className="Collection-item">
        {this.props.children}
      </div>
    );
  }

});

export default CollectionItem;
