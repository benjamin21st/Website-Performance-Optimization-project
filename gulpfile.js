var gulp = require('gulp');
var imagemin = require('gulp-imagemin');
var minifyCss = require('gulp-minify-css');
var minifyHTML = require('gulp-minify-html');
var uglify = require('gulp-uglify');
var localConfig = require('./local_config');
var jsHint = require('gulp-jshint');

var print = function (p) {
  console.log(p);
};

print('[INFO] environment is ...');
print(localConfig.developmentEnvironment);


var imgSrc = 'src/images/**';
var imgDest = 'images';
var cssSrc = 'src/css/**';
var cssDest = 'css';
var jsSrc = 'src/js/**';
var jsDest = 'js';
var htmlSrc = 'src/html/**';
var htmlDest = ''; // current folder

gulp.task('images', function() {
  return gulp.src(imgSrc)
    .pipe(imagemin({
      optimizationLevel: 7
    }))
    .pipe(gulp.dest(imgDest));
});

gulp.task('watch', function() {
  gulp.watch(imgSrc, ['images']);
  gulp.watch(jsSrc, ['js']);
  gulp.watch(cssSrc, ['css']);
});

gulp.task('css', function() {
  return gulp.src(cssSrc)
    .pipe(minifyCss())
    .pipe(gulp.dest(cssDest));
});

gulp.task('html', function() {
  return gulp.src(htmlSrc)
    .pipe(minifyHTML())
    .pipe(gulp.dest(htmlDest));
});

gulp.task('js', function() {
  if (localConfig.developmentEnvironment === 'development') {
    return gulp.src(jsSrc)
      .pipe(gulp.dest(jsDest));
  } else if (localConfig.developmentEnvironment === 'production') {
    return gulp.src(jsSrc)
      .pipe(uglify())
      .pipe(gulp.dest(jsDest));
  }
});

gulp.task('default', ['images', 'css', 'html', 'js', 'watch']);
