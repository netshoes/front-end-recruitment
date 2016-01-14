(function() {
	'use strict';

	angular
		.module('app')
		.service('ProductService', Product);

	Product.$inject = ['$http', 'Request'];

	function Product($http, Request) {
        this.get = function() {
            return $http.get("../data/products.json");
        };
	}
})();
