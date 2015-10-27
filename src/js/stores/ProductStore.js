let AppDispatcher = require('../dispatcher/AppDispatcher');
let EventEmitter = require('events').EventEmitter;
let CartConstants = require('../constants/CartConstants');
let CartStore = require('./CartStore');

let _products = [];
 
let ProductStore = Object.assign({}, EventEmitter.prototype, {
	addChangeListener: function(callback) {
		this.on('change', callback);
	},
	removeChangeListener: function(callback) {
		this.removeListener('change', callback);
	},
	emitChange: function() {
    	this.emit('change');
  	},
    setProducts: function(products) {
        let selectedProducts = CartStore.getSelectedProducts();

        if (selectedProducts) {
            selectedProducts.forEach((selectedProduct) => {
                products.forEach((product) => {
                    if (selectedProduct.id === product.id) {
                        product.addedToCart = true;
                    }
                });
            });
        }

        _products = products;
    },
	getProducts: function() {
		return _products;
	}
});

AppDispatcher.register(function(payload) {
    let data = payload.data;

    switch(payload.type) {
        case CartConstants.LOAD_PRODUCTS:
            ProductStore.setProducts(data);
            break;
        case CartConstants.FLAG_SELECTED_PRODUCTS:
            ProductStore.flagProductsAsAdded();
    	default:
    		return true
    }

    ProductStore.emitChange();

    return true;
});

module.exports = ProductStore;