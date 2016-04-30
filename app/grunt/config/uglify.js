// Uglify definitions
module.exports = function(grunt) {
  return {
    build: {
      files: [{
        expand: true,
        flatten: true,
        src: ['**/*.js', '!**/*.min.js'],
        ext: '.min.js',
        dest: 'public/js/',
        cwd: 'public/js/'
      }]
    }
  }
};
