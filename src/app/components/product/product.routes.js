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

    $stateProvider.state('app.dashboard.product', {
      url: 'produto/:id',
      views: {
        '@app.dashboard': {
          templateUrl: 'product/show.html',
          controller: 'ProductController as vm'
        }
      }
    })
    .state('app.dashboard.products', {
      url: 'produtos',
      views: {
        '@app.dashboard': {
          templateUrl: 'product/list.html',
          controller: 'ProductController as vm'
        }
      }
    });
  }

})();
