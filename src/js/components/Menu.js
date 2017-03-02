let React = require('react');
let AppDispatcher = require('../dispatcher/AppDispatcher');
let CartConstants = require('../constants/CartConstants');

let Menu = React.createClass({
	showCart: function() {
		AppDispatcher.dispatch({
			type: CartConstants.CART_VISIBLE,
			data: true
		})
	},
	render: function() {
		return (
			<div className="cart-menu" onClick={this.showCart}>
				<i className="icon icon-menu" />
				<span className="cart-menu__counter">
					{this.props.totalProducts}
				</span>
			</div>
		)
	}
});

module.exports = Menu;