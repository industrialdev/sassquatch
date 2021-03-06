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
    destAssetPath = process.env.DEST_ASSET_PATH,
    templatePath = process.env.TEMPLATE_PATH,
    assetPath = process.env.ASSET_PATH,
    styleName = process.env.STYLE_NAME,
    scriptName = process.env.SCRIPT_NAME;

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
  gulp.src(srcPath + assetPath + '/styles/' + styleName + '.scss')
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
    .pipe(gulp.dest(destPath + destAssetPath + '/styles/'))
    .pipe(gulp.dest(srcPath + assetPath + '/styles/'))
    .pipe(sass({
      outputStyle: 'compressed'
    }))
    .pipe(rename(styleName + '.min.css'))
    .pipe(gulp.dest(destPath + destAssetPath + '/styles/min'))
    .pipe(gulp.dest(srcPath + assetPath + '/styles/min'));
});

// Compiles both unminified and minified JS files
gulp.task('scripts', function() {
  gulp.src([srcPath + assetPath + '/scripts/' + '*.js', 'node_modules/@sassquatch/theme/assets/scripts/*.js'])
    .pipe(plumber())
    .pipe(concat(scriptName + '.js'))
    .on('error', onError)
    .pipe(gulp.dest(destPath + destAssetPath + '/scripts/'))
    .pipe(rename(scriptName + '.min.js'))
    .pipe(uglify())
    .pipe(gulp.dest(destPath + destAssetPath + '/scripts/min'))
    .pipe(gulp.dest(srcPath + assetPath + '/scripts/min/'));
});

// Minifies images to optimize load times
gulp.task('images', function(){
  gulp.src(srcPath + assetPath + '/images/' + '*')
    .pipe(imagemin())
    .pipe(gulp.dest(destPath + destAssetPath + '/images/'))

  gulp.src(srcPath + assetPath + '/icons/' + '*')
    .pipe(imagemin())
    .pipe(gulp.dest(destPath + destAssetPath + '/icons/'))
});

// Duplicates fonts into destination folder
gulp.task('fonts', function(){
  gulp.src(srcPath + assetPath + '/fonts/' + '**/*')
    .pipe(gulp.dest(destPath + destAssetPath + '/fonts/'));
});

// Converts twig templates to HTML
gulp.task('templates', function() {
  gulp.src(srcPath + templatePath + '/*.twig')
    .pipe(twig())
    .pipe(rename(function(path){
      path.suffix += ".html";
    }))
    .pipe(gulp.dest(destPath));
});

// Watches files for changes and compiles on the fly
gulp.task('watch', function () {
  gulp.watch(srcPath + assetPath + '/styles/' + '**/*.scss', ['sass']);
  gulp.watch(srcPath + assetPath + '/scripts/' + '*.js', ['scripts']);
  gulp.watch(srcPath + '/static/**/*.twig', ['templates']);
});

// error notifications
var onError = function (err) {
  notify({
    title: 'Gulp Task Error',
    message:  "Error: <%= error.message %>",
  }).write(err);

  this.emit('end');
}
