'use strict';

import React from 'react/addons';
import _ from 'lodash';

let { PropTypes } = React;
let { classSet } = React.addons;

let HomeEntry = React.createClass({

	propTypes: {
		name: PropTypes.string,
		children: PropTypes.oneOf([
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

		let classes = classSet({
			'EntryPoint': true,
			[`EntryPoint--${name}`]: !_.isEmpty(name)
		});

		return (
			<div className={classes}>
				{this.props.children}
			</div>
		);
	}

});

export default HomeEntry;
