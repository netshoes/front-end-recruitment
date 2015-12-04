/**
 * Linter tasks
**/
gulp.task('linter', () => {
  return gulp.src(config.linter.srcs)
    .pipe($.plumber({ errorHandler: onError }))
    .pipe($.jshint())
    .pipe($.jshint.reporter($.stylish));
});
