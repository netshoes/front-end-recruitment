'use strict';

import React from 'react';
import classnames from 'classnames';

let Collection = React.createClass({

  render() {
    return (
      <div className="Collection">
        {this.props.children}
      </div>
    );
  }

});

export default Collection;
