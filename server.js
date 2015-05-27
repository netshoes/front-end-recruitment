'use strict';

require('babel/register');
require('isomorphic-fetch');
let express = require('express');
let path = require('path');
let logger = require('morgan');
let bodyParser = require('body-parser');
let fs = require('fs');
let ejs = require('ejs');
let React = require('react');
let FluxComponent = React.createFactory(require('flummox/component'));
let App = React.createFactory(require('./scripts/components/App'));
let Flux = require('./scripts/Flux');

/**
 * Express server configuration
 */

let app = express();
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/public'));

/**
 * Express React serving server config
 */

app.get('/', function(req, res, next) {
  let indexTemplate = fs.readFileSync('./views/index.ejs', 'utf8');
  let flux = new Flux();
  
  // inject products
  // TODO: wait for every async action called by components in a route
  let getAllProducts = flux.getActions('products').getAllProducts;

  // run action and render page
  getAllProducts()
    .then(function() {
      let reactApp = React.renderToString(
        FluxComponent({flux: flux}, 
          App()
        )
      );

      let snapshot = flux.serialize();

      res.send(ejs.render(indexTemplate, {
        snapshot: JSON.stringify(snapshot),
        reactApp: reactApp
      }));
    })
    .catch(error => console.log(error.stack));
});

/**
 * Start server
 */

app.set('port', process.env.PORT || 3000);
var server = app.listen(app.get('port'), function() {
  console.log('Express server listening on port ' + server.address().port);
});
