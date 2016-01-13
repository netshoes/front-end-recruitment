(function() {
  'use strict';

  angular
    .module('test')
    .config(config);

  function config($logProvider, toastrConfig) {

    $logProvider.debugEnabled(true);

    toastrConfig.allowHtml = true;
    toastrConfig.timeOut = 3000;
    toastrConfig.positionClass = 'toast-top-right';
    toastrConfig.preventDuplicates = false;
    toastrConfig.progressBar = true;
  }

})();
