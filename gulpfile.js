var gulp = require('gulp'),
    sass = require('gulp-sass'),
    uglify = require('gulp-uglify'),
    webserver = require('gulp-webserver'),
    autoprefixer = require('gulp-autoprefixer'),
    concat = require('gulp-concat'),
    rename = require('gulp-rename'),
    plumber = require('gulp-plumber'),
    notify = require('gulp-notify'),
    twig = require('gulp-twig'),
    imagemin = require('gulp-imagemin');

gulp.task('default', ['templates', 'sass', 'scripts', 'webserver', 'watch']);

gulp.task('webserver', function() {
  gulp.src('./dist')
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
  gulp.src('./src/assets/styles/sswatch.scss')
    .pipe(plumber())
    .pipe(sass({
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
    .pipe(gulp.dest('./dist/assets/styles'));
});

gulp.task('watch', function () {
  gulp.watch('./src/assets/styles/**/*.scss', ['sass']);
  gulp.watch('./src/assets/scripts/*.js', ['scripts']);
  gulp.watch('./src/**/*.twig', ['templates']);
});

gulp.task('scripts', function() {
  return gulp.src('./src/assets/scripts/*.js')
    .pipe(plumber())
    .pipe(concat('sswatch.js'))
    .on('error', onError)
    .pipe(gulp.dest('./dist/assets/scripts'))
    .pipe(rename('sswatch.min.js'))
    .pipe(uglify())
    .pipe(gulp.dest('./dist/assets/scripts/min'));
});

gulp.task('images', function(){
  gulp.src('./src/assets/images/*')
    .pipe(imagemin())
    .pipe(gulp.dest('./dist/assets/images'))

  gulp.src('./src/assets/icons/*')
    .pipe(imagemin())
    .pipe(gulp.dest('./dist/assets/icons'))
});

gulp.task('templates', function() {
  return gulp.src('./src/*.twig')
    .pipe(twig())
    .pipe(rename(function(path){
      path.suffix += ".html";
    }))
    .pipe(gulp.dest('./dist'));
});

// error notifications using GULP Notify
var onError = function (err) {
  notify({
    title: 'Gulp Task Error',
    message:  "Error: <%= error.message %>",
  }).write(err);

  this.emit('end');
}
