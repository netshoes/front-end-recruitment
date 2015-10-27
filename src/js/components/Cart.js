let React = require('react');
let CartProduct = require('./CartProduct');
let CartSubtotal = require('./CartSubtotal');
let CartStore = require('../stores/CartStore');
let CartConstants = require('../constants/CartConstants');
let AppDispatcher = require('../dispatcher/AppDispatcher');

let cartState = function() {
	return { 
		opened: CartStore.getCartVisibility(),
		height: document.body.offsetHeight + 'px'
	}
}

let Cart = React.createClass({
	mixins: [
    	require('react-onclickoutside')
  	],
  	handleClickOutside: function() {
  		AppDispatcher.dispatch({
  			type: CartConstants.CART_VISIBLE,
  			data: false
  		});
  	},
	getInitialState: function() {
		return cartState();
	},
	componentDidMount: function () {
		CartStore.addChangeListener(this._onChange);
	},
	componentWillUnmount: function () {
		CartStore.addChangeListener(this._onChange);
	},
	_onChange: function () {
		this.setState(cartState());
	},
	render: function() {
		let products = [];

		if (this.props.products) {
			products = this.props.products.map((product, i) => {
				return (<CartProduct product={product} key={i} />);
			});
		}

		return (
			<section className={'bag' + (this.state.opened ? ' bag--opened' : '')} height={this.state.height}>
	    		<div className="bag__header">
	    			<div className="bag__product-count__holder">
		    			<span className="bag__product-count">{this.props.totalProducts}</span>
		    			<strong className="bag__product-count__title">Sacola</strong>
	    			</div>
	    		</div>
	    		{products}
	    		<CartSubtotal totalAmount={this.props.totalAmount} totalProducts={CartStore.getTotalProducts()} />
	    		{CartStore.getTotalProducts() > 0
	    			? 
	    			<a href="#" className="button button--black bag--button">Comprar</a>
	    			:
	    			false
	    		}
	    	</section>
		)
	}
});

module.exports = Cart;