var gulp = require('gulp');
var browserify = require('browserify');
var source = require('vinyl-source-stream');
var babelify = require("babelify");
var connect = require("gulp-connect");
var sourcemaps = require("gulp-sourcemaps");
var stylus = require("gulp-stylus");
var imagemin = require("gulp-imagemin");

gulp.task('browserify', function () {
  browserify('./src/js/main.js')
    .transform('babelify')
    .bundle()
    .pipe(source('main.js'))
    .pipe(gulp.dest('dist/js'));
});

gulp.task('stylus', function() {
  gulp.src('src/assets/stylus/**/*.styl')
      .pipe(sourcemaps.init())
      .pipe(stylus())
      .pipe(sourcemaps.write())
      .pipe(gulp.dest('dist/assets/css'));
});

gulp.task('copy', function () {
  gulp.src('src/index.html')
    .pipe(gulp.dest('dist'));

  gulp.src('src/js/**/*.*')
    .pipe(gulp.dest('dist/js'));

  gulp.src('src/assets/font/**/*.*')
    .pipe(gulp.dest('dist/assets/font/'));

  gulp.src('public/data/**/*.*')
    .pipe(gulp.dest('dist/data/'));
});

gulp.task('default', ['browserify', 'copy', 'stylus', 'imagemin', 'connect'], function() {
  gulp.watch('src/**/*.*', ['browserify', 'copy', 'stylus', 'imagemin']);
});

gulp.task('imagemin', function () {
  gulp.src('src/assets/images/**/*.*')
    .pipe(imagemin())
    .pipe(gulp.dest('dist/assets/images'));
});

gulp.task('connect', function() {
  connect.server({
    livereload: false,
    port: 8000,
    root: './dist'
  });
});