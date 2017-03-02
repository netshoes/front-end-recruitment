/**
 * Events service
 *
 * Link: https://gist.github.com/turtlemonvh/10686980
 *
 */

(function() {
  'use strict';

  angular.module('app.components.core').factory('events', Factory);

  Factory.$inject = ['$rootScope'];

  function Factory($rootScope) {

    return {emit, on};

    function emit(key, data = {}) {
      $rootScope.$emit(key, data);
    }

    function on(key, scope, cb) {
      const unbind = $rootScope.$on(key, cb);

      if (scope) {
        scope.$on('$destroy', unbind);
      }

      return unbind;
    }
  }

})();
