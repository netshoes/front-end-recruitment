import promise from 'bluebird';

module.exports = function(app){

  let Player = new app.models.Player();

  class PlayerController extends app.controllers.ApplicationController{

    create(name, email){
      let resolver = promise.pending();
      Player.create({ 'name' : name, 'email' : email })
      .then(function(row) {
        resolver.resolve(row);
      }).catch(function(error) {
        resolver.reject(error);
      });
      return resolver.promise;
    }

    show(id){
      let resolver = promise.pending();
      Player.findById(id)
      .then(function(rows) {
        resolver.resolve(rows);
      }).catch(function(error) {
        resolver.reject(error);
      });
      return resolver.promise;
    }

    list(){
      let resolver = promise.pending();
      Player.sort('id')
      .then(function(rows) {
        resolver.resolve(rows);
      }).catch(function(error) {
        resolver.reject(error);
      });
      return resolver.promise;
    }

  }

  return PlayerController;

};
