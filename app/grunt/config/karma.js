module.exports = function(grunt) {
  var options  = grunt.config.get('options');
  return {
    unit: {
      configFile: 'app/grunt/tests/karma.conf.js'
    }
  }
};
