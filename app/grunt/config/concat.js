// Concat definitions
module.exports = function(grunt) {
  var options  = grunt.config.get('options');
  return {
    modernizr: {
      src: options.javascripts.modernizr.scripts,
      dest: 'public/js/modernizr.js'
    },
    home: {
      src: options.javascripts.home.scripts,
      dest: 'public/js/home.js'
    }
  }
};
