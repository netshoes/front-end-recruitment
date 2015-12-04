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
    const _ = $window._;
    const storage = $window.localStorage;

    const session = {
        STORAGE: JSON.parse(storage.getItem(ENV)) || {}
    };

    return {set, get, getKeys, getAll, unset, clearAll};

    function persist() {
      try {
        storage.setItem(ENV, JSON.stringify(session.STORAGE));
      } catch (e) {}
    }

    function set(key, value = null){
      if (!_.isString(key)) return false;

      const data = _.set(session.STORAGE, key, value);

      persist();

      return data;
    }

    function get(key, defaultValue = ''){
      return _.get(session.STORAGE, key, defaultValue);
    }

    function getKeys(){
      return _.keys(session.STORAGE);
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
