/**
 * Styles tasks
 *
 * All .scss are compiled to a minified and another non-minified
 * .css file
**/
gulp.task('styles', () => {
  return gulp.src(config.styles.srcs)
    .pipe($.plumber({ errorHandler: onError }))
    .pipe($.sass())
    .pipe($.cssmin({ keepSpecialComments: 1, rebase: true}))
    .pipe(gulp.dest(config.styles.dest))
    .pipe($.connect.reload());
});
