/**
 * Cart service
 *
 * @author Gustavo Alves - contato@gustavocalves.com.br
 *
 */

(function() {
  'use strict';

  angular.module('app.components.cart').service('CartService', Service);

  let Session;

  Service.$inject = ['session'];

  function Service(session) {

    Session = session;

    this.add = function(product){
      let cart = Session.get('cart') || [];
      let productInCart = this.findById(product.id);
      if( productInCart ){
        productInCart.quantity = productInCart.quantity + 1;
      }else{
        product.quantity = 1;
        cart.push(product);
      }
      Session.set('cart', cart);
    };

    this.remove = function(id){
      let cart = Session.get('cart');
      cart.forEach((item) =>{
        if( item.id === id ){
          cart.splice(item, 1);
          return;
        }
      });
      Session.set('cart', cart);
    };

    this.list = function(){
      return Session.get('cart');
    };

    this.findById = function(id){
      let cart = Session.get('cart');
      let product = null;
      if(!cart){
        return product;
      }
      cart.forEach((item) =>{
        if( item.id === id ){
          product = item;
        }
      });
      return product;
    };

  }

})();
