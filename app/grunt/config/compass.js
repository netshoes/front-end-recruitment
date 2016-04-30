// https://github.com/gruntjs/grunt-contrib-sass
module.exports = {
  desktop: {
    options: {
      sassDir: '<%= paths.sassLoad %>/desktop',
      cssDir: 'public/css/desktop',
      // Can be: development or production
      environment: 'development'
    }
  },
  mobile: {
    options: {
      sassDir: '<%= paths.sassLoad %>/mobile',
      cssDir: 'public/css/mobile',
      // Can be: development or production
      environment: 'development'
    }
  },
  tablet: {
    options: {
      sassDir: '<%= paths.sassLoad %>/tablet',
      cssDir: 'public/css/tablet',
      // Can be: development or production
      environment: 'development'
    }
  }
};
