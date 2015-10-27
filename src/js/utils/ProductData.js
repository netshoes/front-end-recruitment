let CartActions = require('../actions/CartActions');

let ProductData = {
	get: function() {
		let request = new XMLHttpRequest(); 

		request.open('GET', '/data/products.json', true);
		request.onreadystatechange = () => {
			if (request.readyState !== 4 || request.status !== 200) {
				return;
			}

			let data = JSON.parse(request.responseText).products;
			CartActions.loadProducts(data);
		};

		request.send();
	},
	getSelected: function() {
		let selectedProducts = JSON.parse(localStorage.getItem('selectedProducts'));
		CartActions.loadSelectedProducts(selectedProducts);
	}
};

module.exports = ProductData;