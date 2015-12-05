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

  Controller.prototype.init = function(){
    this.list();
    this.count();
    this.total();
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
    if( isInCart(product) ){
      console.log('ja estava');
    }
    Service.add(product);
  };

  Controller.prototype.remove = function(product){
    Service.remove(product);
  };

  Controller.prototype.total = function(){
    let cart = Service.list();
    this.total = cart.reduce((previous, current) => {
      return { price: previous.price + current.price };
    }, { price: 0 });
  };

  Controller.prototype.count = function(){
    let cart = Service.list();
    this.items_size = cart.length;
  };

  Controller.prototype.isInCart(product){
    let cart = Service.list();
    return cart.find({ id: product.id });
  }

})();
