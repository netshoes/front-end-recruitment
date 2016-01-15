(function() {
	'use strict';

	angular
		.module('app')
		.controller('ProductController', ProductCtrl);

	ProductCtrl.$inject = ['$scope', 'ProductService', '$timeout'];

	function ProductCtrl($scope, ProductService, $timeout) {
    var loadProducts = function() {
      ProductService.getProducts().success(function (data) {
          $scope.products = data.products;
          console.log($scope.products);
      });
    }
		$scope.cart = 'close';
		$scope.addProduct = function() {
			$scope.cart = 'open';
			$timeout(function(){
				$scope.cart = 'close';
			}, 3000);
		}

		loadProducts();
  };
})();
