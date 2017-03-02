/**
 * Session service
 *
 * @author Gustavo Alves - contato@gustavocalves.com.br
 *
 */

(function() {
  'use strict';

  angular.module('app.components.core').factory('session', Session);

  Session.$inject = ['APP','ENV', '$window'];

  function Session(APP, ENV, $window) {
    const storage = $window.localStorage;

    const session = {
        STORAGE: JSON.parse(storage.getItem(ENV)) || {}
    };

    return {set, get, getAll, unset, clearAll};

    function persist() {
      try {
        storage.setItem(ENV, JSON.stringify(session.STORAGE));
      } catch (e) {}
    }

    function set(key, value = null){
      if (!angular.isString(key)) return false;
      session.STORAGE[key] = value;
      persist();
    }

    function get(key, defaultValue = ''){
      return session.STORAGE[key];
    }

    function getAll(){
      return session.STORAGE;
    }

    function unset(key){
      set(key);
    }

    function clearAll(){
      let data = {};
      session.STORAGE = data;
      persist();
      return data;
    }
  }

})();
