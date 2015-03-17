var gulp = require('gulp'),
	gutil = require('gulp-util'),
	compass = require('gulp-compass');

gulp.task('log', function() {
    gutil.log('Workflows are awesome!')
});

var sassSources = ['components/sass/style.scss'];

gulp.task('compass', function() {
    gulp.src(sassSources)
      .pipe(compass({
      	sass: 'components/sass',
      	image: 'builds/development/images',
      	style: 'expanded' 
      }))
      .on('error', gutil.log)
      .pipe(gulp.dest('builds/development/css'))
});

gulp.task('defult',['tasks'], function() {
    // content
});