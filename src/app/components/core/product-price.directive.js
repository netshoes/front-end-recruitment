(function(){
  'use strict';

  angular
    .module('app.components.core')
    .directive('productPrice', Directive);

    Directive.$inject = ['$filter'];

    function Directive($filter){
      return {
        link: link,
        restrict : 'EA'
      };

      function link(scope, element, attrs) {
        let price = attrs.price;
        let currency = attrs.currency;
        let priceFiltered = $filter('currency')(price, ' ', 2);
        let [value, cents] = priceFiltered.split(',');
        let html = `${currency} <strong>${value}</strong>,<span>${cents}</span>`;
        element.html(html);
      }
    }

})();
