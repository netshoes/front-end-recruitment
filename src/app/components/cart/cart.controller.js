/**
 * Cart controller
 *
 * @author Gustavo Alves - contato@gustavocalves.com.br
 *
 */

(function() {
  'use strict';

  angular.module('app.components.cart').controller('CartController', Controller);

  let Scope, Service;

  Controller.$inject = ['$scope', 'CartService'];

  function Controller($scope, CartService) {
    Scope = $scope;
    Service = CartService;

    this.isHidden = true;
  }

  Controller.prototype.init = function(){
    this.reinitialize();
    Scope.$on('buy', (event, product) => {
      this.add(product);
    });
  };

  Controller.prototype.reinitialize = function(){
    this.list();
    this.count();
    this.total();
  };

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
    this.reinitialize();
  };

  Controller.prototype.remove = function(product){
    Service.remove(product);
  };

  Controller.prototype.total = function(){
    let cart = Service.list();
    this.total_price = 0;
    if(!cart){
      this.total_price = 0;
      return;
    }
    cart.forEach((item) => {
      this.total_price = this.total_price + (item.price * item.quantity);
    });
  };

  Controller.prototype.count = function(){
    let cart = Service.list();
    this.items_size = 0;
    if(cart){
      this.items_size = cart.length || 0;
    }
  };

  Controller.prototype.isInCart = function(product){
    let cart = Service.list();
    if(!cart){
      return false;
    }
    if(Service.findById(product.id)){
      return true;
    }
    return false;
  };

})();
