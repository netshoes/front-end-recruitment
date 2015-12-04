import promise from 'bluebird';

module.exports = function(app){

  let Product = new app.models.Product();

  class ProductController extends app.controllers.ApplicationController{

    show(id){
      let resolver = promise.pending();
      Product.findById(id)
      .then(function(rows) {
        resolver.resolve(rows);
      }).catch(function(error) {
        resolver.reject(error);
      });
      return resolver.promise;
    }

    list(){
      let resolver = promise.pending();
      Product.sort('id')
      .then(function(rows) {
        resolver.resolve(rows);
      }).catch(function(error) {
        resolver.reject(error);
      });
      return resolver.promise;
    }

  }

  return ProductController;

};
