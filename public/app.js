'use strict';
 
 
angular.module('shoppingCart', [
    'ngRoute',
    'cart'
]).
config(['$routeProvider', function($routeProvider) {
    $routeProvider.otherwise({
        redirectTo: '/cart'
    });
}])


.filter('moeda',
    ['$filter', function (filter) {
        return function (amount) {
            var n = amount,
            c = 2,
            d = ",",
            t = ".",
            s = n < 0 ? "-" : "",
            i = parseInt(n = Math.abs(+n || 0).toFixed(c)) + "",
            j = (j = i.length) > 3 ? j % 3 : 0;
            return  s  + (j ? i.substr(0, j) + t : "") + i.substr(j).replace(/(\d{3})(?=\d)/g, "$1" + t) + (c ? d + Math.abs(n - i).toFixed(c).slice(2) : "");
        }
    }]);
