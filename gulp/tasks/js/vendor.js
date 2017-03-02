/**
 * Vendor tasks
 *
 * Bundle vendor files into a single file
**/
gulp.task('vendor', () => {
  return gulp.src(config.vendor.dev.srcs)
    .pipe($.plumber({ errorHandler: onError }))
    .pipe($.smaps.init({loadMaps: true}))
    .pipe($.concat(config.vendor.dev.file))
    .pipe($.smaps.write('./'))
    .pipe(gulp.dest(config.vendor.dev.dest));
});
