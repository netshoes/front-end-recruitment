(function() {
	'use strict';

	angular
		.module('app')
		.controller('ProductController', ProductCtrl);

	ProductCtrl.$inject = ['$scope', 'ProductService'];

	function ProductCtrl($scope, ProductService) {
        var loadProducts = function() {
            ProductService.get().success(function(data){
                $scope.products = data;
                console.log($scope.products);
            });
        };
    }
})();
