/**
 * Product routes
 *
 * @author Gustavo Alves - contato@gustavocalves.com.br
 *
**/

(function() {
  'use strict';

  angular.module('app.components.product').config(Routes);

  Routes.$inject = ['$stateProvider', '$urlRouterProvider'];

  function Routes($stateProvider, $urlRouterProvider) {
    $stateProvider.state('app.products.show', {
      url: '/produto/:id',
      views: {
        '@': {
          templateUrl: 'product/show.html',
          controller: 'ProductController as vm'
        }
      }
    })
    .state('app.products', {
      url: '/produtos',
      views: {
        '@': {
          templateUrl: 'product/list.html',
          controller: 'ProductController as vm'
        }
      , 'cart@': {
          templateUrl: 'cart/cart.html',
          controller: 'CartController as vm'
        }
      }
    });
  }

})();
