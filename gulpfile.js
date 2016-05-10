var gulp = require('gulp');
var sass = require('gulp-sass');
var uglify = require('gulp-uglify');
var webserver = require('gulp-webserver');
var autoprefixer = require('gulp-autoprefixer');
var concat = require('gulp-concat');

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
    .pipe(autoprefixer({
      browsers: ['last 100 versions'],
      cascade: false
    }))
    .on('error', function (err) {
      console.log(err.message);
    })
    .pipe(gulp.dest('./assets/styles'));
});

gulp.task('watch', function () {
  gulp.watch('./assets/styles/*.scss', ['sass']);
  gulp.watch('./assets/scripts/*.js', ['scripts']);
});

gulp.task('scripts', function() {
  return gulp.src('./assets/scripts/*.js')
    .pipe(uglify())
    .pipe(gulp.dest('./assets/scripts/min/'));
});

function errorHandler(error) {
  console.log(error.toString());
  this.emit('end');
}