/**
 * Server tasks
 *
 * Create and run a development webserver
**/
gulp.task('server', () => {
  $.connect.server({
    root: ['./src'],
    livereload: true,
    port: 5001
  });
});
