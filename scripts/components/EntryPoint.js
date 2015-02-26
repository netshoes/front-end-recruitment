'use strict';

import React from 'react/addons';
import _ from 'lodash';

import NavBar from '../components/NavBar';

let { PropTypes } = React;
let { classSet } = React.addons;

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

		let classes = classSet({
			'EntryPoint': true,
			[`EntryPoint--${name}`]: !_.isEmpty(name)
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
