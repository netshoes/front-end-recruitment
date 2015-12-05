/**
 * Product controller
 *
 * @author Gustavo Alves - contato@gustavocalves.com.br
 *
 */

(function() {
  'use strict';

  angular.module('app.components.product').controller('ProductController', Controller);

  let State, PService, CService;

  Controller.$inject = ['$state', 'ProductService', 'CartService'];

  function Controller($state, ProductService, CartService) {
    State   = $state;
    PService = ProductService;
    CService = CartService;
  }

  Controller.prototype.show = function(){
    let id = State.params.id;
    let result = PService.show(id);
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
    let result = PService.list();
    result.then( (data) => {
      this.products = data.data;
    }, (errors) => {

    });
  };

  Controller.prototype.buy = function(product){
    CService.add(product);
  };

})();
