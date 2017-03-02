let React = require('react');
let PriceUtils = require('../utils/PriceUtils');

let Installments = React.createClass({
	getInstallmentValue: function () {
		if (!this.props.installments) {
			return PriceUtils.formatPrice(this.props.price);
		}

		return PriceUtils.formatPrice(this.props.price / this.props.installments);
	},
	render: function () {
		return(
			<span className="product__instalments">ou {this.props.installments}x <strong>{this.props.currency} {this.getInstallmentValue()}</strong></span>
		)
	}
});

module.exports = Installments;