(function() {
	'use strict';

	angular
		.module('app')
		.service('ProductService', productService);

	productService.$inject = ['$http'];

	function productService($http) {
    this.getProducts = function() {
        return $http.get("../data/products.json");
    };
	};
})();
