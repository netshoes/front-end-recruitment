let React = require('react');
let PriceUtils = require('../utils/PriceUtils');

let Price = React.createClass({
	render: function() {
		return (
			<span>
				{this.props.currency} <span className="product--price__integer">{PriceUtils.splitPrice(this.props.price).integer}</span>,{PriceUtils.splitPrice(this.props.price).cents}
			</span>
		)
	}
});

module.exports = Price;