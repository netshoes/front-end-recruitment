/**
 * Product controller
 *
 * @author Gustavo Alves - contato@gustavocalves.com.br
 *
 */

(function() {
  'use strict';

  angular.module('app.components.product').controller('ProductController', Controller);

  let Scope, State, Service;

  Controller.$inject = ['$rootScope', '$state', 'ProductService'];

  function Controller($rootScope, $state, ProductService) {
    Scope   = $rootScope;
    State   = $state;
    Service = ProductService;
  }

  Controller.prototype.show = function(){
    let id = State.params.id;
    let result = Service.show(id);
    result.then( (data) => {
      this.product = data.data;
    }, (errors) => {

    });
    this.product = this.products.find( (object, index, array) => {
      if(object.id === +id){
        return object;
      }
      return false;
    });
  };

  Controller.prototype.list = function(){
    let result = Service.list();
    result.then( (data) => {
      this.products = data.data;
    }, (errors) => {

    });
  };

  Controller.prototype.buy = function(product){
    Scope.$broadcast('buy', product);
  };

})();
