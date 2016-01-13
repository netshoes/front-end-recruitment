(function() {
	'use strict';

	angular
		.module('test')
		.factory('productServices', function($http, $sessionStorage, $rootScope){
			return {
				getProducts : function() {
					return $http.get('http://www.json-generator.com/api/json/get/cpgYOKVazS?indent=2');
				},
				getStorage : function(){
					$rootScope.cartOrders = $sessionStorage.cart;
				},
				saveStorage : function(){
					$sessionStorage.cart = $rootScope.cartOrders;
				}
			};
		})

})();
