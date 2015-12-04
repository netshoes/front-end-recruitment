module.exports = function(app) {

  let Sample = new app.controllers.SampleController();

  app.post('/sample', function(req, res){

    let {param1, param2} = req.body;

    Sample.create(param1, param2)
    .done(function(result){
      res.sendStatus(201);
    }, function(error){
      res.sendStatus(404);
    });
  });

  app.get('/sample/:id', function(req, res){

    let id = req.params.id;

    Sample.show(id)
    .done(function(data){
      res.send( data );
    }, function(error){
      res.sendStatus(404);
    });
  });

  app.put('/sample/:id', function(req, res){

    let id = req.params.id;
    let {param1, param2} = req.body;

    Sample.update(id, param1, param2)
    .done(function(data){
      res.send( data );
    }, function(error){
      res.sendStatus(404);
    });
  });

  app.delete('/sample/:id', function(req, res){

    let id = req.params.id;

    Sample.remove(id)
    .done(function(data){
      res.send( data );
    }, function(error){
      res.sendStatus(404);
    });
  });

  app.get('/samples', function(req, res){
    Sample.list()
    .done(function(data){
      res.send( data );
    }, function(error){
      res.sendStatus(404);
    });
  });

};
