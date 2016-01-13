(function() {
	'use strict';

	angular
		.module('test')
		.controller('CartMenuController', function($scope, $rootScope, productServices, toastr) {

			$scope.remove = function(order){
				var index = $rootScope.cartOrders.indexOf(order);
				$rootScope.cartOrders.splice(index, 1);
				toastr.success('Removido com sucesso', order.title);
				productServices.saveStorage();  
			}

			$scope.totalPrice = function(){
				var total = 0;
				for(var i = 0; i < $rootScope.cartOrders.length; i++){
					var product = $rootScope.cartOrders[i];
					total += (product.price * product.quantity);
				}
				return total;
			};

		});

})();
