/**
 * Dist tasks
 *
 * Clean dist folder
**/
gulp.task('dist:clean', function() {
  return gulp.src(config.dist.dest)
    .pipe($.plumber({ errorHandler: onError }))
    .pipe($.clean());
});
