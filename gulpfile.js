var gulp = require('gulp');
var imagemin = require('gulp-imagemin');
var minifyCss = require('gulp-minify-css');
var minifyHTML = require('gulp-minify-html');
var uglify = require('gulp-uglify');


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

gulp.task('js', function(){
  return gulp.src(jsSrc)
    .pipe(uglify())
    .pipe(gulp.dest(jsDest));
});

gulp.task('default', ['images', 'css', 'html', 'js', 'watch']);
