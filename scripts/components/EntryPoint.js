'use strict';

import React from 'react';
import _ from 'lodash';
import classnames from 'classnames';

import NavBar from '../components/NavBar';

let { PropTypes } = React;

let EntryPoint = React.createClass({

  propTypes: {
    name: PropTypes.string,
    children: PropTypes.oneOfType([
      PropTypes.element,
      PropTypes.arrayOf(PropTypes.element)
    ]).isRequired
  },

  getDefaultProps() {
    return {
      name: ''
    };
  },

  render() {
    let { name } = this.props;

    let classes = classnames({
      'EntryPoint': true,
      [`EntryPoint--${name.toLowerCase()}`]: !_.isEmpty(name)
    });

    return (
      <div className={classes}>
        <NavBar />
        <div className="EntryPoint-content">
          {this.props.children}
        </div>
      </div>
    );
  }

});

export default EntryPoint;
