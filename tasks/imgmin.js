/***************************************************************
   IMAGE TASK
***************************************************************/
var gulp = require('gulp'),
		config = require('../gulp.conf.js'),
		imagemin = require('gulp-imagemin');

gulp.task(config.tasks.imagemin, function() {
  return gulp.src(config.src.imgs)
    .pipe(imagemin({
      progressive: true,
    }))
    .pipe(gulp.dest(config.dist.imgs));
});
