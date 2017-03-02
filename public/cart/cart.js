'use strict';
 
angular.module('cart', ['ngRoute'])
 
.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/cart', {
    templateUrl: 'public/cart/cart.html',
    controller: 'CartCtrl'
  });
}])
 
.controller('CartCtrl', ['$scope','$http',function($scope,$http) {

	$scope.sizes = {};

	$scope.cartCount = 0;
  
	$http.get("/list").then(function(response) {
 		$scope.shopData = response.data.products;
    }).catch(function() {
    	console.log("Error on load products list");
    });

    $scope.selectedProducts = [];
    $scope.selectedOption = {};

    $scope.add = function(product) {
    	$scope.cartCount = $scope.selectedProducts.length + 1;
        var productToCheckout = {
    		sku:product.sku,
    		size:$scope.sizes.selectedOption[product.sku],
    		title:product.title,
    		style:product.style,
    		price:product.price,
    		currencyFormat:product.currencyFormat
    	};
    	$scope.selectedProducts.push(productToCheckout);
    	
    	$scope.list();
    	$scope.subtotal = $scope.calculaSubtotal($scope.selectedProducts);
    };

    $scope.delete = function ( idx ) {
        $scope.cartCount = $scope.selectedProducts.length - 1;
        var itemToDelete = $scope.selectedProducts[idx];
        $scope.selectedProducts.splice(idx, 1);
        $scope.subtotal = $scope.calculaSubtotal($scope.selectedProducts);
    };

    $scope.list = function() {
    	$scope.listar = $scope.selectedProducts;
    };

    $scope.calculaSubtotal = function(lista) {
    	var calcSubtotal = 0;
		angular.forEach(lista, function(result) {
			calcSubtotal = calcSubtotal + result.price;
		});
		return calcSubtotal;
    };

}])
