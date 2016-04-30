// Karma configuration
module.exports = function(config) {
  config.set({
    basePath: '../../../',
    frameworks: ['jasmine'],
    files: [
      'src/js/vendor/**/*.js',
      'src/js/startup.js',
      'src/js/**/*.js',
      'app/grunt/tests/files/components/**/*.js'
    ],
    exclude: [
      'src/js/vendor/buttons.js',
      'src/js/vendor/modernizr-3.3.1.js'
    ],
    reporters: ['progress'],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: ['PhantomJS'],
    captureTimeout: 60000,
    singleRun: false
  });
};
