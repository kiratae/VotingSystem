var gulp = require('gulp');
var sass = require('gulp-sass');
 
sass.compiler = require('node-sass');
 
gulp.task('sass', function () {
  return gulp.src('./styles/bootstrap/bootstrap.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./src/assets/css'));
});
 
gulp.task('sass:watch', function () {
  gulp.watch('./styles/bootstrap/**/*.scss', ['sass']);
});