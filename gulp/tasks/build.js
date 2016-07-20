var gulp = require('gulp');

gulp.task('build', ['browserify', 'markup']);

gulp.task('serveprod', function() {
  connect.server({
    root: build,
    port: process.env.PORT || 5000,
    livereload: false
  });
});