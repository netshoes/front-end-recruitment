/**
 * Karma Task
 *
**/
gulp.task('test:unit', function() {
  let configurator = require('../../../tests/karma.conf.js'),

  configs = {
    LOG_INFO: "INFO",
    set: function(options) {
      for (let i in options) {
        this[i] = options[i];
      }
    }
  };

  configurator(configs);
  configs.singleRun = true;

  $.karma.server.start(configs, function(exitCode) {
    if (exitCode === 0) {
      gulp.start('dist');
    }
  });
});
