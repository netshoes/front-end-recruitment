/***************************************************************
   STYLES TASK
   path: scr/stylus/*.styl
   save to: public/css/style.css
   dependence: gulp-stylus, gulp-plumber, gulp-minify-css
***************************************************************/

var gulp = require('gulp'),
  config = require('../gulp.conf.js'),
  pkg = require('../package.json'),
  lost = require('lost'),
  rucksack = require('rucksack-css'),
  stylus = require('gulp-stylus'),
  autoprefixer = require('autoprefixer'),
  poststylus = require('poststylus'),
  header = require('gulp-header'),
  rename = require('gulp-rename'),
  plumber = require('gulp-plumber'),
  minifycss = require('gulp-minify-css');

gulp.task(config.tasks.styles, function() {
    return gulp.src(config.src.styles)
        .pipe(stylus({
          use: [
            poststylus(['autoprefixer','lost'])
          ]
        }))
        .pipe(plumber())
        .pipe(gulp.dest(config.dist.styles));
});

gulp.task(config.tasks.cssmin, function() {
  return gulp.src('public/styles/style.css')
    .pipe(plumber())
    .pipe(minifycss())
    .pipe(rename({suffix: '.min'}))
    .pipe(gulp.dest(config.dist.styles));
});


function banner() {
  var stamp = [
    '/**',
    ' * <%= pkg.name %> - <%= pkg.description %>',
    ' * @author <%= pkg.author.name %> <<%= pkg.author.email %>>',
    ' * @version v<%= pkg.version %>',
    ' * @link <%= pkg.homepage %>',
    ' * @license <%= pkg.license %>',
    ' */',
    ''
  ].join('\n');

  return header(stamp, { pkg: pkg });
}
