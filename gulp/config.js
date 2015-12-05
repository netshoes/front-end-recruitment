/**
 * Gulp config options
 * @author Gustavo Alves - contato@gustavocalves.com.br
**/

global['config'] = module.exports = {

  /**
   * Vendor javascript files that will be compiled
   * into vendor.min.js
  **/
  vendor : {
    dev: {
      srcs: [
        // Angular
          './src/bower/angular/angular.min.js'
        , './src/bower/angular-animate/angular-animate.min.js'
        , './src/bower/angular-ui-router/release/angular-ui-router.min.js'
      ]
      ,  dest: './src/assets/js/'
      , file: 'vendor.min.js'
    }
  },

  /**
   * Distribuition files that will be copied to
   * ./dist folder
  **/
  dist : {
    srcs: [
      './src/index.html'
      , './src/assets/css/**/*'
      , './src/assets/fonts/**/*'
      , './src/assets/images/**/*'
      , './src/assets/js/**/*'
      , '!./src/assets/js/*.map'
    ]
    , dest: './dist'
  },

  /**
   * SCSS files that will be compiled
   * into file.min.css
  **/
  styles : {
      srcs: ['./src/assets/scss/**/*.scss']
    , dest: './src/assets/css/'
  },

  /**
   * Angular templates files
  **/
  templates : {
      srcs: ['./src/app/components/**/*.html']
    , dest: './src/app/'
    , module: 'app.templates'
    , file: 'app.templates.js'
  },

  /**
   * Angular app files
  **/
  app : {
    srcs: [
        './src/app/app.module.js'
      , './src/app/app.templates.js'
      , './src/app/app.config.js'
      , './src/app/app.routes.js'
      , './src/app/components/components.js'
      , './src/app/components/**/*.module.js'
      , './src/app/components/**/*.routes.js'
      , './src/app/components/**/*.service.js'
      , './src/app/components/**/*.controller.js'
      , './src/app/components/**/*.filter.js'
      , './src/app/components/**/*.directive.js'
      , './src/app/scripts.js'
    ]
    , dest: './src/assets/js/'
    , file: 'app.min.js'
  },

  /**
   * Javascript files to be linted
  **/
  linter : {
    srcs: [
        './app/**/*.js'
      , './src/app/**/*.js'
      , '!./src/app/**/templates.js'
      , '!./gulp/**/*.js'
      , './gulpfile.js'
      , './app.js'
      , './server.js'
      , './tests/**/*.js'
      , '!./tests/coverage/**/*'
    ]
  }
};
