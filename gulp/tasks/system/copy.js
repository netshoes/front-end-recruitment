/**
 * Dist tasks
 *
 * Copy the necessary files to dist folder
**/
gulp.task('dist:copy', function() {
  return gulp.src(config.dist.srcs, { base: './src' })
    .pipe($.plumber({ errorHandler: onError }))
    .pipe(gulp.dest(config.dist.dest));
});
