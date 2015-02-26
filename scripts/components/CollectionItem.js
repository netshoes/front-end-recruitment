'use strict';

import React from 'react';

// TODO: implement correct CollectionItem
let CollectionItem = React.createClass({

  render() {
    return (
      <div>
        {this.props.children}
      </div>
    );
  }

});

export default CollectionItem;
