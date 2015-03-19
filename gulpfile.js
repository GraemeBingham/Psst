var gulp = require('gulp'),
	gutil = require('gulp-util'),
	compass = require('gulp-compass'),
	connect = require('gulp-connect'),
	haml = require('gulp-ruby-haml');

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
      .pipe(connect.reload())
});

gulp.task('watch', function() {
    gulp.watch('components/sass/*.scss', ['compass']);
    gulp.watch('components/haml/*.haml', ['haml']);
});

gulp.task('connect', function() {
    connect.server({
    	root: 'builds/development/',
    	livereload: true
    })
});

gulp.task('haml', function() {
	gulp.src('components/haml/*.haml')
	      .pipe(haml())
	      .pipe(gulp.dest('builds/development/'))
	      .pipe(connect.reload())    
});

gulp.task('default',['compass', 'haml' ,'connect', 'watch'], function() {
    
});