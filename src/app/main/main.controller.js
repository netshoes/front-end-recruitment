(function() {
	'use strict';

	angular
	.module('testeNetshoes')
	.controller('MainController', MainController);

	MainController.$inject = ['ProductsService', '$scope', 'localStorageService'];


	/** @ngInject */
	function MainController(ProductsService, ng, localStorageService) {
		ProductsService.listProducts()
		.then(function(data) {
			ng.products = data.products;
			ng.showCart = false;
		});

		var CartItensStorage = localStorageService.get('CartItens');
		ng.CartItens = CartItensStorage || [];

		ng.$watch('CartItens', function () {
			localStorageService.set('CartItens', ng.CartItens);
		}, true);

		var TotalPriceStorage = localStorageService.get('TotalPrice');
		ng.TotalPrice = TotalPriceStorage || 0;

		ng.$watch('TotalPrice', function () {
			localStorageService.set('TotalPrice', ng.TotalPrice);
		}, true);

		function addToCart(item) {
			var _item = {
				id: ng.products[item].id,
				title: ng.products[item].title,
				price: ng.products[item].price
			};
			ng.CartItens.push(_item);
			ng.TotalPrice += ng.products[item].price;
			ng.showCart = true;
		};
		ng.addToCart = addToCart;

		function removeItem(item) {
			ng.TotalPrice -= ng.CartItens[item].price;
			ng.CartItens.splice( item, 1 );
			if (ng.CartItens == 0) { ng.showCart = false};
		};
		ng.removeItem = removeItem;
	}
})();