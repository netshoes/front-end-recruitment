'use strict';

angular.module('testeNetshoes')
.factory('ProductsService', ProductsService);
ProductsService.$inject = ['$http'];

function ProductsService($http) {

	var localhost = window.location.origin;
	function listProducts() {
		return $http.get(localhost + "/products.json")
		.then(function(data) {
			return data.data;
		});
	}

	return {
		listProducts: listProducts
	};
}