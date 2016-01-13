(function() {
  'use strict';

  angular
  .module('test')
  .config(routerConfig);

  function routerConfig($stateProvider, $urlRouterProvider) {
    $stateProvider
    .state('home', {
      url: '/',
      templateUrl: 'app/templates/main/main.html',
      controller: 'MainController',
      controllerAs: 'main'
  });

    $urlRouterProvider.otherwise('/');
}

})();
