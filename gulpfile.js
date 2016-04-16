var gulp = require('gulp'),
    jade = require('gulp-jade'),
	sass = require('gulp-sass');	
 
gulp.task('jade', function() {
    return gulp.src('src/**/*.jade')
        .pipe(jade()) 
        .pipe(gulp.dest('dist/'));
});

gulp.task('sass', function () {
  return gulp.src('src/scss/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('dist/css'));
});
 
gulp.task('sass:watch', function () {
  gulp.watch('src/**/*.scss', ['sass']);
});