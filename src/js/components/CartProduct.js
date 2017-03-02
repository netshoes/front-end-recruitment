let React = require('react');
let Price = require('./Price');
let AppDispatcher = require('../dispatcher/AppDispatcher');
let CartConstants = require('../constants/CartConstants');

let CartProduct = React.createClass({
	getInitialState: function() {
        return {
            hover: false
        }
    },
    onMouseOver: function() {
        this.setState({ hover: true });
    },
    onMouseOut: function() {
        this.setState({ hover: false });
    },
    getTotalPrice: function(price, quantity) {
        return price * quantity;
    },
    removeProduct: function() {
        AppDispatcher.dispatch({
            type: CartConstants.REMOVE_PRODUCT,
            data: this.props.product
        })
    },
    render: function() {
        let productProperties = this.props.product;

		return(
			<div className={'bag-product ' + (this.state.hover ? 'bag-product--remove' : '')}>
    			<div className="bag-product__image-holder">
    				<img src={`./assets/images/${productProperties.id}.jpg`} className="bag-product__image"  alt={`${productProperties.title} - ${productProperties.style}`} />
    			</div>
    			<div className="bag-product__info">
    				<span className="bag-product__name">{productProperties.title}</span>
    				<span className="bag-product__description">{productProperties.selectedSize} | {productProperties.style}</span>
    				<span className="bag-product__quantity">Quantidade {productProperties.quantity}</span>
    			</div>
    			<div className="bag-product__price-holder">
    				<span className="bag-product__remove" onMouseOver={this.onMouseOver} onMouseOut={this.onMouseOut} onClick={this.removeProduct}>X</span>
    				<span className="bag-product__price">
    					{<Price currency={productProperties.currencyFormat} price={this.getTotalPrice(productProperties.price, productProperties.quantity)} />}
    				</span>
    			</div>
    		</div>
		);
	}
});

module.exports = CartProduct;