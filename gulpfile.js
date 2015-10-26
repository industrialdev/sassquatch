'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var uglify = require('gulp-uglify');
var webserver = require('gulp-webserver');

gulp.task('default', ['webserver', 'sass', 'watch']);

gulp.task('webserver', function() {
  gulp.src('./')
    .pipe(webserver({
      fallback: 'index.html',
      livereload: true,
      directoryListing: {
        enable: true,
        path: 'root'
      },
      open: true
    }));
});

gulp.task('sass', function () {
  gulp.src('./assets/styles/main.scss')
    .pipe(sass({
      includePaths: require('node-neat').includePaths,
      outputStyle: 'compressed'
    }))
    .on('error', function (err) {
      console.log(err.message);
    })
    .pipe(gulp.dest('./assets/styles'));
});

gulp.task('watch', function () {
  gulp.watch('./assets/styles/*.scss', ['sass']);
});

gulp.task('scripts', function() {
  return gulp.src('public/resources/js/**/*.js')
    .pipe(uglify())
    .pipe(gulp.dest('public/resources/min'));
});

function errorHandler(error) {
  console.log(error.toString());
  this.emit('end');
}