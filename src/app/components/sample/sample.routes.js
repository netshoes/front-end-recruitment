/**
 * Sample routes
 *
 * @author Gustavo Alves - contato@gustavocalves.com.br
 *
**/

(function() {
  'use strict';

  angular.module('app.components.sample').config(Routes);

  Routes.$inject = ['$stateProvider', '$urlRouterProvider'];

  function Routes($stateProvider, $urlRouterProvider) {

    $stateProvider.state('app.dashboard.sample', {
      url: 'sample',
      views: {
        '@app.dashboard': {
          templateUrl: 'sample/index.html',
          controller: 'SampleController as vm'
        }
      }
    })
    .state('app.dashboard.sample.new', {
      url: '/new',
      views: {
        '@app.dashboard': {
          templateUrl: 'sample/new.html',
          controller: 'SampleController as vm'
        }
      }
    })
    .state('app.dashboard.sample.edit', {
      url: '/edit/:id',
      views: {
        '@app.dashboard': {
          templateUrl: 'sample/edit.html',
          controller: 'SampleController as vm'
        }
      }
    })
    .state('app.dashboard.samples', {
      url: 'samples',
      views: {
        '@app.dashboard': {
          templateUrl: 'sample/list.html',
          controller: 'SampleController as vm'
        }
      }
    });
  }

})();
