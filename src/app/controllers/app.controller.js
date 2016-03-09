(function() {
	'use strict';

	angular
	.module('test')
	.controller('appController', function($scope, $rootScope) {
		$scope.state = false;

		$rootScope.cartOrders = [];
	
		$scope.toggleState = function() {
			$scope.state = !$scope.state;
		};


	});


})();
