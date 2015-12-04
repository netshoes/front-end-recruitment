gulp.task('dist', () => {
  $.runsec(
    'linter',
    'styles',
    'templates',
    'app',
    'vendor',
    'dist:clean',
    'dist:copy'
  );
});
