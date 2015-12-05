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
      cart.push(product);
      Session.set('cart', cart);
    };

    this.remove = function(product){
      Session.remove(product);
    };

    this.list = function(){
      return Session.get('cart');
    };

  }

})();
