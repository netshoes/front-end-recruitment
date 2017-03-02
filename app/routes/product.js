module.exports = function(app) {

  let Product = new app.controllers.ProductController();

  app.get('/product/:id', function(req, res){

    let id = req.params.id;

    Product.show(id)
    .done(function(data){
      res.send( data );
    }, function(error){
      res.sendStatus(404);
    });
  });

  app.get('/products', function(req, res){
    Product.list()
    .done(function(data){
      res.send( data );
    }, function(error){
      res.sendStatus(404);
    });
  });

};
