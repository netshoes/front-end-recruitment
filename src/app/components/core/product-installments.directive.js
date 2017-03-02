(function(){
  'use strict';

  angular
    .module('app.components.core')
    .directive('productInstallments', Directive);

    Directive.$inject = ['$filter'];

    function Directive($filter){
      return {
        link: link,
        restrict : 'EA'
      };

      function link(scope, element, attrs) {
        let installment = attrs.price / attrs.installments;
        installment = $filter('currency')(installment, 'R$ ', 2);
        element.text(installment);
      }
    }

})();
