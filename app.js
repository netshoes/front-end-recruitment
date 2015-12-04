import config from 'config';
import db  from './app/database/database';
import express from 'express';
import load from 'express-load';
import bodyParser  from 'body-parser';

// global.DB = db;

let app = express();
let dir = process.cwd();

app.use(bodyParser.urlencoded({ extended: false }));
app.set('views', dir + '/dist');
app.use(express.static(dir  + '/dist', { index: false }));

load('./app/models')
  .then('./app/controllers')
  .then('./app/routes')
  .into(app);

let server = app.listen(config.get("APP.port"), function () {
  let host = server.address().address;
  let port = server.address().port;
  console.log('Listening at http://%s:%s', host, port);
});
