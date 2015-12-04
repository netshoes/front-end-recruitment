/**
 * Templates tasks
 *
 * Bundle angular html files into a module
**/
gulp.task('templates', () => {
  return gulp.src(config.templates.srcs)
    .pipe($.plumber({ errorHandler: onError }))
    .pipe($.ngCache({
      module: config.templates.module,
      filename: config.templates.file,
      templateHeader: 'angular.module("<%= module %>"<%= standalone %>).run(["$templateCache", function($templateCache) {',
      base: (file) => { return file.path.replace(file.base, '').replace('/templates', ''); }
    }))
    .pipe(gulp.dest(config.templates.dest))
    .pipe($.connect.reload());
});
