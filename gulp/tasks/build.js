var gulp = require('gulp');
var connect = require('gulp-connect');
gulp.task('build', ['browserify', 'markup']);

gulp.task('serveprod', function() {
  connect.server({
    root: 'build',
    port: process.env.PORT || 8000,
    livereload: false
  });
});