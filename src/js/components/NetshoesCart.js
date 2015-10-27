let React = require('react');
let ProductStore = require('../stores/ProductStore');
let CartStore = require('../stores/CartStore');
let ProductList = require('./ProductList');
let Cart = require('./Cart');
let Menu = require('./Menu');

let getCartState = function () {
	return {
		products: ProductStore.getProducts(),
		selectedProducts: CartStore.getSelectedProducts(),
		totalProducts: CartStore.getTotalProducts(),
		totalAmount: CartStore.getTotalAmount()
	}
}

let NetshoesCart = React.createClass({
	getInitialState: function () {
		return getCartState()
	},
	componentDidMount: function () {
		ProductStore.addChangeListener(this._onChange);
		CartStore.addChangeListener(this._onChange);
	},
	componentWillUnmount: function () {
		ProductStore.addChangeListener(this._onChange);
		CartStore.addChangeListener(this._onChange);
	},
	_onChange: function () {
		this.setState(getCartState());
	},
	render: function() {
		return (
			<div className="main">
				<div className="cart">
					<Menu totalProducts={this.state.totalProducts} />
					<ProductList products={this.state.products} />
				</div>
				<Cart products={this.state.selectedProducts} totalProducts={this.state.totalProducts} totalAmount={this.state.totalAmount} />
			</div>
		);
	}
});

module.exports = NetshoesCart;