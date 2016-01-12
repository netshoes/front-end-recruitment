/**************************************************************
6. ZIP TASKS
**************************************************************/

var gulp = require('gulp'),
	config = require('../gulp.conf.js'),
	zip = require('gulp-zip');

gulp.task(config.tasks.zip, function() {
  return gulp.src('./public/**')
    .pipe(zip('archive.zip'))
    .pipe(gulp.dest('./'));
});
