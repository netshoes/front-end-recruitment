/**
 * Cart controller
 *
 * @author Gustavo Alves - contato@gustavocalves.com.br
 *
 */

(function() {
  'use strict';

  angular.module('app.components.cart').controller('CartController', Controller);

  let Service;

  Controller.$inject = ['CartService'];

  function Controller(CartService) {
    Service = CartService;

    this.isHidden = true;
  }

  Controller.prototype.show = function(){
    this.isHidden = false;
  };

  Controller.prototype.hide = function(){
    this.isHidden = true;
  };

  Controller.prototype.list = function(){
    this.cart = Service.list();
  };

  Controller.prototype.add = function(product){
    Service.add(product);
  };

  Controller.prototype.remove = function(product){
    Service.remove(product);
  };



})();
