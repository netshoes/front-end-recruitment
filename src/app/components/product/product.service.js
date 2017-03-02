/**
 * Product service
 *
 * @author Gustavo Alves - contato@gustavocalves.com.br
 *
 */

(function() {
  'use strict';

  angular.module('app.components.product').service('ProductService', Service);

  Service.$inject = ['APP', '$http'];

  function Service(APP, $http) {

    this.show = function(id){
      return $http.get(`${APP.API_URL}/product/${id}`);
    };

    this.list = function(){
      return $http.get(`${APP.API_URL}/products`);
    };

  }

})();
