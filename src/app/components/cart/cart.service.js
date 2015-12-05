/**
 * Cart service
 *
 * @author Gustavo Alves - contato@gustavocalves.com.br
 *
 */

(function() {
  'use strict';

  angular.module('app.components.cart').service('Cartervice', Service);

  let Session;

  Service.$inject = ['session'];

  function Service(session) {

    Session = session;

    this.add = function(product){
      Session.set('cart', product);
    };

    this.remove = function(product){
      Session.unset('cart');
    };

    this.list = function(){
      return Session.get('cart');
    };

  }

})();
