const // Package Variables
    dotenv = require('dotenv').config({path: '.env'}),
    gulp = require('gulp'),
    filter = require('gulp-filter'),
    sass = require('gulp-sass'),
    sourcemaps = require('gulp-sourcemaps'),
    uglify = require('gulp-uglify'),
    browserSync = require("browser-sync").create();
    open = require('gulp-open');
    autoprefixer = require('gulp-autoprefixer'),
    concat = require('gulp-concat'),
    rename = require('gulp-rename'),
    plumber = require('gulp-plumber'),
    notify = require('gulp-notify'),
    twig = require('gulp-twig'),
    imagemin = require('gulp-imagemin'),
    wrap = require('gulp-wrap'),
    insert = require('gulp-insert'),
    // Environment Variables
    srcPath = process.env.SRC_PATH,
    destPath = process.env.DEST_PATH,
    destAssetPath = process.env.DEST_ASSET_PATH,
    templatePath = process.env.TEMPLATE_PATH,
    assetPath = process.env.ASSET_PATH,
    styleName = process.env.STYLE_NAME,
    scriptName = process.env.SCRIPT_NAME;

function serveTask(){
  browserSync.init({
    server: {
      baseDir: destPath
    }
  });
};

function reloadTask(done) {
  browserSync.reload();
  done();
};

// Compiles both unminified and minified CSS files
function sassTask(){
  return gulp.src(srcPath + assetPath + '/styles/' + styleName + '.scss')
    .pipe(plumber())
    .pipe(sourcemaps.init())
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
    .pipe(sourcemaps.write('../maps'))
    .pipe(gulp.dest(destPath + destAssetPath + '/styles/'))
    .pipe(filter("\.css\.map$"))
    .pipe(sass({
      outputStyle: 'compressed'
    }))
    .pipe(rename(styleName + '.min.css'))
    .pipe(gulp.dest(destPath + destAssetPath + '/styles/' + 'min'))
    .pipe(gulp.dest(srcPath + 'packages/theme/assets/styles'))
    .pipe(browserSync.stream())
};

function demoSassTask(){
  return gulp.src(srcPath + assetPath + '/styles/demo.scss')
    .pipe(plumber())
    .pipe(sourcemaps.init())
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
    .pipe(sourcemaps.write('../maps'))
    .pipe(gulp.dest(destPath + destAssetPath + '/styles/'))
    .pipe(filter("\.css\.map$"))
    .pipe(sass({
      outputStyle: 'compressed'
    }))
    .pipe(rename('demo.min.css'))
    .pipe(gulp.dest(destPath + destAssetPath + '/styles/' + 'min'))
    .pipe(browserSync.stream())
}

// Compiles both unminified and minified JS files
function scriptsTask(){
  return gulp.src(srcPath + assetPath + '/scripts/' + '*.js')
    .pipe(plumber())
    .pipe(concat(scriptName + '.js'))
    .pipe(insert.wrap('(function($){\n\n', '\n\n})(jQuery);'))
    .on('error', onError)
    .pipe(gulp.dest(destPath + destAssetPath + '/scripts/'))
    .pipe(rename(scriptName + '.min.js'))
    .pipe(uglify())
    .pipe(gulp.dest(destPath + destAssetPath + '/scripts/' + 'min'))
    .pipe(gulp.dest(srcPath + 'packages/theme/assets/scripts/' + 'min'))
    .pipe(browserSync.stream())
};

// Minifies images to optimize load times
function imagesTask(){
  return gulp.src(srcPath + assetPath + '/images/' + '*')
  .pipe(imagemin())
  .pipe(gulp.dest(destPath + destAssetPath + '/images/'))
};

function iconsTask(){
  return gulp.src(srcPath + assetPath + '/icons/' + '*')
    .pipe(imagemin())
    .pipe(gulp.dest(destPath + destAssetPath + '/icons/'));
}

// Duplicates fonts into destination folder
function fontsTask(){
  return gulp.src(srcPath + assetPath + '/fonts/' + '**/*')
    .pipe(gulp.dest(destPath + destAssetPath + '/fonts/'));
};

// Converts twig templates to HTML
function templatesTask() {
  return gulp.src(srcPath + templatePath + '/*.twig')
    .pipe(twig())
    .pipe(rename(function(path){
      path.suffix += ".html";
    }))
    .pipe(gulp.dest(destPath))
    .pipe(browserSync.stream())
};

// Watches files for changes and compiles on the fly
function watchTask() {
  gulp.watch(srcPath + assetPath + 'scripts/' + '*.js', gulp.series(scriptsTask, reloadTask));
  gulp.watch(srcPath + assetPath + 'styles/' + '**/*.scss', gulp.series(sassTask, demoSassTask, reloadTask));
  gulp.watch(srcPath + 'packages/theme/client/app/Components/' + '**/*.scss', gulp.series(sassTask, demoSassTask, reloadTask));
  gulp.watch(srcPath + 'static/**/*.twig', gulp.series(templatesTask, reloadTask));
};

// error notifications
var onError = function (err) {
  notify({
    title: 'Gulp Task Error',
    message:  "Error: <%= error.message %>",
  }).write(err);

  this.emit('end');
}

module.exports = {
  sass: gulp.series(
    sassTask, demoSassTask
  ),
  scripts: gulp.series(scriptsTask),
  images: gulp.series(
    imagesTask, iconsTask
  ),
  watch: gulp.series(watchTask),
  default: gulp.series(
    templatesTask, sassTask, demoSassTask, scriptsTask, fontsTask, watchTask
  ),
  serve: gulp.parallel(
    serveTask, watchTask
  ),
  build: gulp.series(
    templatesTask, sassTask, demoSassTask, scriptsTask, imagesTask, iconsTask, fontsTask
  )
};