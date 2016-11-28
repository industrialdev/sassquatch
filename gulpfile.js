var gulp = require('gulp');
var sass = require('gulp-sass');
var uglify = require('gulp-uglify');
var webserver = require('gulp-webserver');
var autoprefixer = require('gulp-autoprefixer');
var concat = require('gulp-concat');
var rename = require('gulp-rename');
var plumber = require('gulp-plumber');
var notify = require('gulp-notify');
var imagemin = require('gulp-imagemin');

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
  gulp.src('./assets/styles/sswatch.scss')
    .pipe(plumber())
    .pipe(sass({
      includePaths: require('node-neat').includePaths,
      outputStyle: 'compressed'
    }))
    .on('error', onError)
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
  gulp.watch('./assets/styles/**/*.scss', ['sass']);
  gulp.watch('./assets/scripts/*.js', ['scripts']);
});

gulp.task('scripts', function() {
  return gulp.src('./assets/scripts/*.js')
    .pipe(plumber())
    .pipe(concat('sswatch.js'))
    .on('error', onError)
    .pipe(gulp.dest('./assets/scripts/min'))
    .pipe(rename('sswatch.min.js'))
    .pipe(uglify())
    .pipe(gulp.dest('./assets/scripts/min'));
});

gulp.task('images', function(){
  gulp.src(['./assets/images/*', '!./assets/images/min'])
    .pipe(imagemin())
    .pipe(gulp.dest('./assets/images/min'))
});

// error notifications using GULP Notify
var onError = function (err) {
    notify({
         title: 'Gulp Task Error',
         message:  "Error: <%= error.message %>",
     }).write(err);

     this.emit('end');
}
