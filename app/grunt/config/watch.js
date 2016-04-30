// https://github.com/gruntjs/grunt-contrib-watch
module.exports = function(grunt, data) {
  return {
    grunt: {
      files: ['Gruntfile.js']
    },
    compass: {
      files: [data.paths.scss+'**/*.scss'],
      tasks: ['compass', 'cssmin']
    },
    js: {
     files: [data.paths.js+'**/*.js'],
     tasks: ['concat', 'uglify']
    }
  }
};
