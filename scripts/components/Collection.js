'use strict';

import React from 'react';

// TODO: implement correct Collection
let Collection = React.createClass({

  render() {
    return (
      <div>
        {this.props.children}
      </div>
    );
  }

});

export default Collection;
