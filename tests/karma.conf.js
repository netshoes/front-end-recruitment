/**
 * Karma config
 *
 * @author Gustavo Alves - contato@gustavocalves.com.br
 *
 */

module.exports = function(config) {

  config.set({
    basePath: '',
    frameworks: ['jasmine'],

    files: [
      './src/assets/js/vendor.min.js',
      './src/bower/angular-mocks/angular-mocks.js',
      './src/assets/js/app.min.js',
      './tests/unit/spec-helper.js',
      './tests/unit/**/*.spec.js',
    ],
    exclude: [],
    preprocessors: {
      '**/assets/js/**/*.js': 'coverage'
    },
    reporters: ['progress', 'coverage'],
    coverageReporter: {
      reporters: [{
        type: 'html',
        dir: 'tests/coverage/'
      }, {
        type: 'text-summary',
        dir: 'tests/coverage'
      }],
    },
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: ['PhantomJS'],
    singleRun: false
  });
};
