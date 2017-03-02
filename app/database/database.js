import config from 'config';
import mongoose from 'mongoose';

let db_config = config.get('DB');
let db_uri    = db_config.get('URI');
let db        = mongoose.connect(db_uri);

db.connection.on('connected', function () {
  console.log('Mongoose default connection open to ' + db_uri);
});

db.connection.on('error',function (err) {
  console.log('Mongoose default connection error: ' + err);
});

db.connection.on('disconnected', function () {
  console.log('Mongoose default connection disconnected');
});

module.exports = db;
