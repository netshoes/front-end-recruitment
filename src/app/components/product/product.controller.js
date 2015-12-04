/**
 * Sample controller
 *
 * @author Gustavo Alves - contato@gustavocalves.com.br
 *
 */

(function() {
  'use strict';

  angular.module('app.components.sample').controller('SampleController', Controller);

  let State, Service;

  Controller.$inject = ['$state', 'SampleService'];

  function Controller($state, SampleService) {
    State   = $state;
    Service = SampleService;
    this.sample = {
        param1 : ''
      , param2 : ''
    };
  }

  Controller.prototype.create = function(){
    let result = Service.create(this.sample);
    result.then((data) => {
      if( data.status === 201 ){
        State.go('app.dashboard.samples');
      }
    }, (errors) => {

    });
  };

  Controller.prototype.edit = function(id){
    let result = Service.update(id, this.sample);
    result.then( (data) => {
      State.go('app.dashboard.samples');
    }, (errors) => {
      console.log(errors);
    });
  };

  Controller.prototype.save = function(){
    let id = State.params.id;

    if( this.sample.param1 && this.sample.param2 ){
      if(id){
        return this.edit(id);
      }
      return this.create();
    }else{
      console.log('Missing fields....');
    }

  };

  Controller.prototype.show = function(){
    let id = State.params.id;
    let result = Service.show(id);
    result.then( (data) => {
      this.sample = data.data;
    }, (errors) => {

    });
  };

  Controller.prototype.list = function(){
    let result = Service.list();
    result.then( (data) => {
      this.samples = data.data;
    }, (errors) => {

    });
  };

  Controller.prototype.remove = function(sample){
    let result = Service.remove(sample._id);
    result.then( (data) => {
      State.go(State.current, {}, {reload:true});
    }, (errors) => {
      console.log(errors);
    });
  };

})();
