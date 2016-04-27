(function() {

    'use strict';

    var app = angular.module('store', []);

    app.controller('StoreController', ['$scope', '$http',
        function ($scope, $http) {
            $http.get('data/products.json').success(function(response) {
                $scope.products = response.products;
        });
    }]);
}());
