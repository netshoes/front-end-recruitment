var gulp = require('gulp');
var sass = require('gulp-sass');
var path = require('path');
var express = require('express');
var open = require('gulp-open');
var app = express();
var products = require('./public/data/products');
var cart = [];

gulp.task('express', function() {
  app.use(express.static(__dirname + '/src'));
  app.listen(4000, 'localhost');
});

app.all('*', function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  next();
});

app.get('/', function(req, res) {
   res.sendFile(path.join(__dirname + '/src/index.html'));
});

app.use('/css', express.static(__dirname + '/src/css'));
app.use('/js', express.static(__dirname + '/src/js'));
app.use('/images', express.static(__dirname + '/src/images'));

app.get('/public/data/', function(req, res){
  res.json(products);
});

app.post('/public/cart', function(req, res){
  cart.push(req.query);
  res.json(true);
});

app.get('/public/cart', function(req, res){
  res.json(cart);
});

gulp.task('sass', function () {
  return gulp.src('./scss/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./src/css'));
});

gulp.task('sass:watch', function () {
  gulp.watch('./scss/**/*.scss', ['sass']);
});

gulp.task('open', function(){
  gulp.src('./src/index.html')
  .pipe(open({
    uri: 'http://localhost:4000',
    app: 'google chrome'
  }));
});

gulp.task('default', ['express', 'sass', 'sass:watch', 'open']
);
