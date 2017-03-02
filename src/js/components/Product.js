let React = require('react');
let Price = require('./Price');
let Installments = require('./Installments');
let AppDispatcher = require('../dispatcher/AppDispatcher');
let CartConstants = require('../constants/CartConstants');
let CartStore = require('../stores/CartStore');

let Product = React.createClass({
    getInitialState: function() {
        return {
            sku: this.props.product.sku,
            hover: false,
            selectedSize: this.props.product.availableSizes[0],
            quantity: 1,
            addedToCart: false
        }
    },
    onMouseOver: function() {
        this.setState({ hover: true });
    },
    onMouseOut: function() {
        this.setState({ 
            hover: false
        });
    },
    toggleCart: function() {
        AppDispatcher.dispatch({
          type: CartConstants.CART_VISIBLE,
          data: !CartStore.getCartVisibility()
        });
    },
    addToCart: function() {
        if (this.state.addedToCart || this.props.product.addedToCart) {
            this.toggleCart();

            return;
        }

        let product = this.props.product;

        product.selectedSize = this.state.selectedSize;
        product.quantity = this.state.quantity;

        AppDispatcher.dispatch({
          type: CartConstants.ADD_PRODUCT,
          data: product
        });

        this.setState({ addedToCart: true });
    },
    setSize: function(e) {
        this.setState({ selectedSize: e.target.value });
    },
    setQuantity: function(e) {
        this.setState({ quantity: e.target.value });
    },
    render: function() {
    	let productProperties = this.props.product;
        let sizes = productProperties.availableSizes.map((size, i) => {
            return (
                <option key={i} value={size}>{size}</option>
            )
        });
        let maxQuantity = [1,2,3,4,5];
        let quantity = maxQuantity.map((quantity, i) => {
            return (
                <option key={i} value={quantity}>{quantity}</option>
            )
        });

    	return (
    		<li className="products-list__holder" key={this.props.key} onMouseOver={this.onMouseOver} onMouseOut={this.onMouseOut}>
    			<a href={`http://www.netshoes.com.br/search?Ntt=${productProperties.title}`} title={productProperties.title} className="product" target="_blank">
    				<span className="product__image-holder">
    					<img src={`./assets/images/${productProperties.id}.jpg`} className="product__image"  alt={`${productProperties.title} - ${productProperties.style}`} />
    				</span>
    				<span className="product__name">{productProperties.title}</span>
    				<span className="product__price">
                        {<Price currency={productProperties.currencyFormat} price={productProperties.price} />}
                    </span>
                    {<Installments currency={productProperties.currencyFormat} installments={productProperties.installments} price={productProperties.price} />}
    			</a>

                <div className="product__options-container">
                    <span role="button" className={'circle-button circle-button--highlight circle-button--add-cart ' + (this.state.hover ? 'visible' : 'hidden') + (productProperties.addedToCart || this.state.addedToCart ? ' added' : ' available') } onClick={this.addToCart}>
                        <i className="icon icon-plus" />
                        <i className="icon icon-ok" />
                    </span>

                    {((!this.state.addedToCart && !productProperties.addedToCart)
                        ?
                        <div className="product__options-holder">
                            <fieldset>
                                <label htmlFor={'size_' + this.props.product.sku}>Tamanho</label>
                                <select id={'size_' + this.props.product.sku} className="product__options product__options--sizes" onChange={this.setSize}>
                                    {sizes}
                                </select>
                            </fieldset>
                            <fieldset>
                                <label htmlFor={'size_' + this.props.product.sku}>Quantidade</label>
                                <select id={'quantity_' + this.props.product.sku} className="product__options product__options--quantity" onChange={this.setQuantity}>
                                    {quantity}
                                </select>
                            </fieldset>
                        </div>
                        :
                        false
                    )}
                </div>
    		</li>);
    }
});

module.exports = Product;