/**************************************************************
5. BROWSER SYNC
**************************************************************/

var gulp = require('gulp'),
	config = require('../gulp.conf.js'),
	browserSync = require('browser-sync');

gulp.task(config.tasks.browsersync, function() {
  browserSync(config.syncConfig, function (err, bs) {
    if (!err) {
      console.log("BrowserSync is ready!");
    }
	});
});
