/**
 * App tasks
 *
 * Bundle Angular.js components into a single file
**/
gulp.task('app', () => {
  return gulp.src(config.app.srcs)
    .pipe($.plumber({ errorHandler: onError }))
    .pipe($.smaps.init())
      .pipe($.gulpBabel({ blacklist: ["strict"] }))
      .pipe($.uglify({
        output: { comments: /^!/i }
      }))
      .pipe($.concat(config.app.file))
    .pipe($.smaps.write('./'))
    .pipe(gulp.dest(config.app.dest))
    .pipe($.connect.reload());
});
