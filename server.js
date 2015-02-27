'use strict';

let express = require('express');
let path = require('path');
let logger = require('morgan');
let bodyParser = require('body-parser');

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

let router = express.Router();
router.get('/', function(req, res) {
  res.render('index');
});

app.use('/', router);

/**
 * Dev server tooling
 */

let webpack = require('webpack');
let webpackMiddleware = require('webpack-dev-middleware');
let webpackConfig = require('./webpack.config');

if (app.get('env') === 'development') {
  app.use(webpackMiddleware(webpack(webpackConfig), {
    publicPath: '/scripts/'
  }));
}

/**
 * Start server
 */

app.set('port', process.env.PORT || 3000);
var server = app.listen(app.get('port'), function() {
  console.log('Express server listening on port ' + server.address().port);
});
