let AppDispatcher = require('../dispatcher/AppDispatcher');
let CartConstants = require('../constants/CartConstants');

let CartActions = {
	loadProducts: function(data) {
		AppDispatcher.dispatch({
			type: CartConstants.LOAD_PRODUCTS,
          	data: data
		});
	},
	loadSelectedProducts: function(data) {
		AppDispatcher.dispatch({
			type: CartConstants.LOAD_SELECTED_PRODUCTS,
          	data: data
		});
	}	
};

module.exports = CartActions;