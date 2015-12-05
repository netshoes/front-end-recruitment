/**
 * App config
 *
 * @author Gustavo Alves - contato@gustavocalves.com.br
 *
 */

(function() {
  'use strict';

  /**
   * Production info
  **/
  const PRODUCTION = {
      VERSION: '0.0.1'
    , API_URL: ''
    , API_VERSION: ''
  };

  /**
   * Development info
  **/
  const DEVELOPMENT = {
      API_URL: '//localhost:3000'
    , API_VERSION: ''
  };

  /**
   * Test info
  **/
  const TEST = {};

  /**
   * APP Config
  **/
  angular.module('app.config').config(Config);

  Config.$inject = ['$provide', '$windowProvider'];

  function Config($provide, $windowProvider) {
    let $window = $windowProvider.$get();
    let app = PRODUCTION;
    let env = 'production';
    let dev_hosts = ['localhost', '127.0.0.1'];

    if(dev_hosts.indexOf($window.location.hostname) !== -1){
      env = 'development';
    }
    if($window.ENV === 'test' || $window.location.port === '9876'){
      env = 'test';
    }

    switch (env) {
      case 'development':
        app = angular.extend(app, DEVELOPMENT);
        break;
      case 'test':
        app = angular.extend(app, TEST);
        break;
    }

    $provide.constant('APP', app);
    $provide.constant('ENV', env);
  }


  /**
   * Fix / slash on the end of url
   * that redirect to root app url
  **/
  angular.module('app.config').config(ConfigTSlash);

  ConfigTSlash.$inject = ['$urlRouterProvider'];

  function ConfigTSlash($urlRouterProvider) {
    $urlRouterProvider.rule(($injector, $location) => {
      let regex = /(.+)(\/+)(\?.*)?$/;
      let path = $location.url();

      if(regex.test(path)) {
        return path.replace(regex, '$1$3');
      }

      return false;
    });
  }


})();
