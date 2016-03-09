(function() {
	'use strict';

	angular
	.module('test')
	.controller('MainController', function($scope, $http, productServices, ngDialog, $rootScope, toastr) {

		$scope.$on('$viewContentLoaded', function() {
			productServices.getStorage();
		});
		
		productServices.getProducts().then(function(resp) {
			$scope.productsList = resp.data.products;
		});
		$scope.hasError = false;
		$scope.hasErrorQtd = false;
		$scope.addToCart = function(product){
			ngDialog.open({
				template: 'confirm',
				controller: function($scope) {
					$scope.productModal = product;
					$scope.quantity = 1;
					$scope.ok = function(){
						if($scope.radioModel != null){
							$scope.productModal.size = $scope.radioModel;
							$scope.productModal.quantity = $scope.quantity;
							// if($rootScope.cartOrders.indexOf($scope.productModal) !== -1) {
							// 	$scope.productModal.quantity = 1 + $rootScope.cartOrders[$rootScope.cartOrders.indexOf($scope.productModal)].quantity
							// 	$scope.productModal.price = $scope.productModal.price + $rootScope.cartOrders[$rootScope.cartOrders.indexOf($scope.productModal)].price
							// } else {
							// 	$scope.productModal.quantity = 1;
							// 	$rootScope.cartOrders.push($scope.productModal);
							// }
							$rootScope.cartOrders.push($scope.productModal);
							toastr.success('Adicionado com sucesso', $scope.productModal.title);
							$scope.closeThisDialog('');
							$scope = $scope.$new(true);
							productServices.saveStorage();
						} else {
							$scope.hasError = true;
							return false;
						}
					}
				}
			});

		}

	});


})();
