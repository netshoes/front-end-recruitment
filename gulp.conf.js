/****************************************************************
  FILE DESTINATIONS (RELATIVE TO ASSESTS FOLDER)
****************************************************************/
module.exports = {

    src: {
        main    : '/',
        styles  : 'assets/styles/main.styl',
        scripts : 'assets/scripts/*.js',
        imgs    : 'assets/imgs/*.{png,jpg,gif}',
        fonts   : 'assets/fonts'
    },
    dist: {
        main    : '/',
        styles  : 'public/assets/styles/',
        scripts : 'public/assets/scripts/',
        imgs    : 'public/assets/imgs/*',
        fonts   : 'public/assets/fonts/'
    },
    tasks: {
        imagemin    : 'imagemin',
        jslint      : 'jslint',
        jsmin       : 'jsmin',
        jsconcat    : 'jsconcat',
        styles      : 'styles',
        cssmin      : 'cssmin',
        cssconcat   : 'cssconcat',
        html        : 'html',
        imgs        : 'imgs',
        browsersync : 'browsersync',
        zip         : 'zip'
    },
    syncConfig: {
        files: ['assets/styles/*.styl','assets/scripts/*.js', 'public/*.html', 'assets/imgs/*.{png,jpg,gif}'],
        server: {
            baseDir: './public',
            index: 'index.html'
        }
    }
}
