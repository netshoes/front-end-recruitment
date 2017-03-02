/**
 * App routes
 *
 * @author Gustavo Alves - contato@gustavocalves.com.br
 *
**/

(function() {
  'use strict';

  angular.module('app.routes').config(Routes);

  Routes.$inject = ['$stateProvider', '$urlRouterProvider'];

  function Routes($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/produtos');

    $stateProvider.state('app', {
      url: '',
      abstract: true
    });
  }

})();
