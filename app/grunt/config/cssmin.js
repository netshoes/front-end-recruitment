// CssMin definitions
module.exports = function(grunt) {
  return {
    desktop: {
      expand: true,
      cwd: 'public/css/desktop',
      src: ['*.css', '!*.min.css'],
      dest: 'public/css/desktop',
      ext: '.min.css'
    },
    mobile: {
      expand: true,
      cwd: 'public/css/mobile',
      src: ['*.css', '!*.min.css'],
      dest: 'public/css/mobile',
      ext: '.min.css'
    },
    tablet: {
      expand: true,
      cwd: 'public/css/tablet',
      src: ['*.css', '!*.min.css'],
      dest: 'public/css/tablet',
      ext: '.min.css'
    }
  }
};
