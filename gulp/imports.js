'use strict';

global['gulp']   = require('gulp');
global['$']      = require('gulp-load-plugins')({
                    pattern       : ['*'],
                    scope         : ['dependencies', 'devDependencies'],
                    replaceString : /^gulp(-|\.)/,
                    camelize      : true,
                    lazy          : true,
                    rename        : {
                      'run-sequence'    : 'runsec',
                      'gulp-minify-css' : 'cssmin',
                      'gulp-sourcemaps' : 'smaps',
                      'gulp-babel' : 'gulpBabel',
                      'gulp-angular-templatecache' : 'ngCache'
                    }
                  });

/**
 * Error handler
 *
 * Invoked by plumber, other error and warning listeners
**/
global['onError'] = function(err) {
  $.util.beep();
  $.util.log($.util.colors.red(err));
  this.emit('end');
};
