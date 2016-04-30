// Copy definitions
module.exports = function(grunt) {
  var options  = grunt.config.get('options');
  return {
    root: {
      expand: true,
      cwd: 'src/root/',
      src: [
        '**'
      ],
      dest: 'public/'
    },
    data: {
      expand: true,
      cwd: 'src/data/',
      src: [
        '**'
      ],
      dest: 'public/data/'
    },
    images: {
      expand: true,
      cwd: 'src/img/',
      src: [
      	'**'
      ],
      dest: 'public/img/'
    },
    fonts: {
      expand: true,
      cwd: 'src/fonts/',
      src: [
        '**'
      ],
      dest: 'public/fonts/'
    }
  }
};
