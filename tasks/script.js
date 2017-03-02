/******************************************************************
4. JS TASKS
   path: scr/js/*.js
   save to: public/js/main.js
   dependence: gulp-jshint, gulp-uglify, gulp-concat, gulp-rename
*******************************************************************/

var gulp = require('gulp'),
  config = require('../gulp.conf.js'),
  uglify = require('gulp-uglify'),
  jshint = require('gulp-jshint'),
  rename = require('gulp-rename'),
  concat = require('gulp-concat'),
  stylish = require('jshint-stylish');

// lint my custom js
gulp.task(config.tasks.jslint, function() {
  return gulp.src(config.src.scripts)
    .pipe(jshint())
    .pipe(jshint.reporter('jshint-stylish'))
    .pipe(gulp.dest(config.dist.scripts));
});

// minify all js files that shold not be concatinated
gulp.task(config.tasks.jsmin, function() {
  return gulp.src(config.dist.scripts + 'main.js')
    .pipe(uglify())
    .pipe(rename({suffix: '.min'}))
    .pipe(gulp.dest(config.dist.scripts));
});
