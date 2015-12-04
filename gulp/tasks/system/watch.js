/**
 * Watch tasks
 *
 * Watch files and folder to run specifics tasks
**/
gulp.task('watch', () => {
  $.watch(config.styles.srcs, { verbose: true }, () => { $.runsec('styles'); });
  $.watch(config.app.srcs, { verbose: true }, () => { $.runsec('app'); });
  $.watch(config.templates.srcs, { verbose: true }, () => { $.runsec('templates'); });
  $.watch(config.linter.srcs, { verbose: true }, () => { $.runsec('linter'); });
});
