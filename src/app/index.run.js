(function() {
  'use strict';

  angular
    .module('testeNetshoes')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
