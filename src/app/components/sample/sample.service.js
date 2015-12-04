/**
 * Sample service
 *
 * @author Gustavo Alves - contato@gustavocalves.com.br
 *
 */

(function() {
  'use strict';

  angular.module('app.components.sample').service('SampleService', Service);

  Service.$inject = ['APP', '$http'];

  function Service(APP, $http) {

    this.create = function(sample){
      return $http.post(`${APP.API_URL}/sample`, sample);
    };

    this.update = function(id, sample){
      return $http.put(`${APP.API_URL}/sample/${id}`, sample);
    };

    this.show = function(id){
      return $http.get(`${APP.API_URL}/sample/${id}`);
    };

    this.list = function(){
      return $http.get(`${APP.API_URL}/samples`);
    };

    this.remove = function(id){
      return $http.delete(`${APP.API_URL}/sample/${id}`);
    };

  }

})();
