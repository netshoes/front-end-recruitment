/**
 * Dashboard routes
 *
 * @author Gustavo Alves - contato@gustavocalves.com.br
 *
**/

(function() {
  'use strict';

  angular.module('app.components.dashboard').config(Routes);

  Routes.$inject = ['$stateProvider', '$urlRouterProvider'];

  function Routes($stateProvider, $urlRouterProvider) {

    $stateProvider.state('app.dashboard', {
      url: '/',
      views: {
        '@': {
          templateUrl: 'dashboard/dashboard.html',
          controller: 'DashboardController as vm'
        },
        'header@app.dashboard': {
          templateUrl: 'dashboard/header.html'
        },
        'footer@app.dashboard': {
          templateUrl: 'dashboard/footer.html'
        },
        '@app.dashboard': {
          templateUrl: 'dashboard/main.html'
        }
      }
    });
  }

})();
