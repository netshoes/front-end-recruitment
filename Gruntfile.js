module.exports = function(grunt) {
  'use strict';

  var project = {
    paths: {
      get dist(){
       return this.root + 'public/';
      },
      get config() {
        return this.grunt + 'config/';
      },
      get clean() {
        return [
          this.root + '/public/css/**/*',
          this.root + '/public/js/**/*',
          this.root + '/public/img/**/*',
          this.root + '/public/font/**/*'
        ]
      },
      locals: {
        css: __dirname + '/public/css',
        js: __dirname + '/public/js'
      },
      sassLoad: __dirname + '/src/scss',
      root: __dirname,
      src: 'src/',
      grunt: 'app/grunt/',
      scss: __dirname + '/src/scss/',
      js: __dirname + '/src/js/'
    }
  };

  // Setting webstore options
  grunt.config.set('options', {
    javascripts: grunt.file.readJSON('app/grunt/javascripts.json')
  });

  // Load Grunt configurations and tasks
  require('load-grunt-config')(grunt, {
    'configPath': require('path').join(process.cwd(), project.paths.config),
    'data': project
  });
};
