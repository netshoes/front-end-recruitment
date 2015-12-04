import config from 'config';
import db  from './database/database';
import express from 'express';
import load from 'express-load';
import bodyParser  from 'body-parser';

let app = express();
let dir = process.cwd();
let dir_app = dir + '/app';

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.set('views', dir + '/dist');
app.use(express.static(dir  + '/dist', { index: false }));

load('models', {cwd: dir_app})
  .then('controllers', {cwd: dir_app})
  .then('routes', {cwd: dir_app})
  .into(app);

let server = app.listen(config.get("APP.port"), function () {
  let host = server.address().address;
  let port = server.address().port;
  console.log('Listening at http://%s:%s', host, port);
});
