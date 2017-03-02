let React = require('react');
let Price = require('./Price');
let PriceUtils = require('../utils/PriceUtils');

const MAX_INSTALLMENTS = 10;

let CartSubtotal = React.createClass({
	getInstallmentsValue: function() {
		return this.props.totalAmount / MAX_INSTALLMENTS;
	},
	render: function () {
		return(
			<div className="bag__subtotal">
				{this.props.totalProducts > 0
	    			? 
	    			<div className="bag__subtotal__holder">
	    				<div className="bag__subtotal__label">Subtotal</div>
		    			<div className="bag__subtotal__price-holder">
		    				<span className="bag-subtotal___price">
		    					<Price price={this.props.totalAmount} />
		    				</span>
		    				<span className="bag-subtotal___installments">ou em até {MAX_INSTALLMENTS} X R$ {PriceUtils.formatPrice(this.getInstallmentsValue())}</span>
		    			</div>
		    		</div>
	    			:
	    			<div>
	    				Sem produtos no carrinho
	    			</div>
	    		}
	    	</div>
		)
	}
});

module.exports = CartSubtotal;