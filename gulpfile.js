var gulp = require('gulp');
var stylus = require('gulp-stylus');
var watch = require('gulp-watch');

gulp.task('default', function() {
  // place code for your default task here
});

// Get one .styl file and render
gulp.task('stylus', function () {
  gulp.src(['development/stylus/app.styl'])
    .pipe(stylus())
    .pipe(gulp.dest('assets/stylesheets/'));
});

gulp.task('watch', function () {
  gulp.watch('development/stylus/**/*.styl', function(e){
    gulp.src('development/stylus/**/*.styl')
      .pipe(watch('development/stylus/**/*.styl'))
      .pipe(stylus())
      .pipe(gulp.dest('assets/stylesheets/'));

    console.log('File ' + e.path + ' was ' + e.type);
  });
});

