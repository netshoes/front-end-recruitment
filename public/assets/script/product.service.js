(function() {
	'use strict';

	angular
		.module('app')
		.service('ProductService', Product);

	Product.$inject = ['$http'];

	function Product($http) {
        this.get = function() {
            return $http.get("../data/products.json");
        };
	};
})();
