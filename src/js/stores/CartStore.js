let AppDispatcher = require('../dispatcher/AppDispatcher');
let EventEmitter = require('events').EventEmitter;
let CartConstants = require('../constants/CartConstants');

let _products = [];
let _cartVisible = false;

function reloadLocalStorage() {
    localStorage.setItem('selectedProducts', JSON.stringify(_products));
}
 
let CartStore = Object.assign({}, EventEmitter.prototype, {
	addChangeListener: function(callback) {
		this.on('change', callback);
	},
	removeChangeListener: function(callback) {
		this.removeListener('change', callback);
	},
	emitChange: function() {
    	this.emit('change');
  	},
    setProduct: function(product) {
        _products.push(product);

        reloadLocalStorage();
    },
	getSelectedProducts: function() {
		return _products;
	},
    getTotalProducts: function() {
        return _products ? _products.length : 0;
    },
    getTotalAmount: function() {
        let total = 0;

        if (_products) {
            _products.forEach((product) => {
                total += (product.price * product.quantity);
            });
        }
        
        return total;
    },
    setCartVisibility: function(visibility) {
        _cartVisible = visibility;
    },
    getCartVisibility: function() {
        return _cartVisible;
    },
    setProducts: function(products) {
        _products = products;
    },
    removeProduct: function(deleteProduct) {
        _products = _products.filter((product) => {
            return product.id !== deleteProduct.id;
        });

        reloadLocalStorage();
    }
});

AppDispatcher.register(function(payload) {
    let data = payload.data;

    switch(payload.type) {
        case CartConstants.ADD_PRODUCT:
            CartStore.setProduct(data);
            break;
        case CartConstants.REMOVE_PRODUCT:
            CartStore.removeProduct(data);
            break;
        case CartConstants.CART_VISIBLE:
            CartStore.setCartVisibility(data);
            break
        case CartConstants.LOAD_SELECTED_PRODUCTS:
            CartStore.setProducts(data);
    	default:
    		return true
    }

    CartStore.emitChange();

    return true;
});

module.exports = CartStore;