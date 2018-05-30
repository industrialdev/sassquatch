var // Package Variables
    dotenv = require('dotenv').config({path: '.env'}),
    gulp = require('gulp'),
    sass = require('gulp-sass'),
    uglify = require('gulp-uglify'),
    webserver = require('gulp-webserver'),
    autoprefixer = require('gulp-autoprefixer'),
    concat = require('gulp-concat'),
    rename = require('gulp-rename'),
    plumber = require('gulp-plumber'),
    notify = require('gulp-notify'),
    twig = require('gulp-twig'),
    imagemin = require('gulp-imagemin'),
    // Environment Variables
    srcPath = process.env.SRC_PATH,
    destPath = process.env.DEST_PATH,
    styleName = process.env.STYLE_NAME,
    scriptName = process.env.SCRIPT_NAME,
    templatePath = process.env.TEMPLATE_PATH,
    stylePath = process.env.STYLE_PATH,
    scriptPath = process.env.SCRIPT_PATH,
    imagePath = process.env.IMAGE_PATH,
    iconPath = process.env.ICON_PATH,
    fontPath = process.env.FONT_PATH;

gulp.task('default', ['templates', 'sass', 'scripts', 'fonts', 'images', 'watch']);

gulp.task('build', ['templates', 'sass', 'scripts', 'fonts', 'images']);

gulp.task('serve', ['webserver', 'watch']);

gulp.task('webserver', function() {
  gulp.src(destPath)
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

// Compiles both unminified and minified CSS files
gulp.task('sass', function () {
  gulp.src(srcPath + stylePath + styleName + '.scss')
    .pipe(plumber())
    .pipe(sass({
      outputStyle: 'expanded',
      includePaths: ['node_modules']
    }))
    .on('error', onError)
    .pipe(autoprefixer({
      browsers: ['last 100 versions'],
      cascade: false
    }))
    .on('error', function (err) {
      console.log(err.message);
    })
    .pipe(gulp.dest(destPath + stylePath))
    .pipe(sass({
      outputStyle: 'compressed'
    }))
    .pipe(rename(styleName + '.min.css'))
    .pipe(gulp.dest(destPath + stylePath + 'min'));
});

// Compiles both unminified and minified JS files
gulp.task('scripts', function() {
  return gulp.src(srcPath + scriptPath + '*.js')
    .pipe(plumber())
    .pipe(concat(scriptName + '.js'))
    .on('error', onError)
    .pipe(gulp.dest(destPath + scriptPath))
    .pipe(rename(scriptName + '.min.js'))
    .pipe(uglify())
    .pipe(gulp.dest(destPath + scriptPath + 'min'));
});

// Minifies images to optimize load times
gulp.task('images', function(){
  gulp.src(srcPath + imagePath + '*')
    .pipe(imagemin())
    .pipe(gulp.dest(destPath + imagePath))

  gulp.src(srcPath + iconPath + '*')
    .pipe(imagemin())
    .pipe(gulp.dest(destPath + iconPath))
});

// Duplicates fonts into destination folder
gulp.task('fonts', function(){
  gulp.src(srcPath + fontPath + '**/*')
    .pipe(gulp.dest(destPath + fontPath));
});

// Converts twig templates to HTML
gulp.task('templates', function() {
  return gulp.src(srcPath + templatePath + '/*.twig')
    .pipe(twig())
    .pipe(rename(function(path){
      path.suffix += ".html";
    }))
    .pipe(gulp.dest(destPath));
});

// Watches files for changes and compiles on the fly
gulp.task('watch', function () {
  gulp.watch(srcPath + stylePath + '**/*.scss', ['sass']);
  gulp.watch(srcPath + scriptPath + '*.js', ['scripts']);
  gulp.watch(srcPath + '/**/*.twig', ['templates']);
});

// error notifications
var onError = function (err) {
  notify({
    title: 'Gulp Task Error',
    message:  "Error: <%= error.message %>",
  }).write(err);

  this.emit('end');
}
