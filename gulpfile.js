"use strict";

var gulp     = require('gulp'),
server       = require('gulp-koa-service'),
autoprefixer = require('gulp-autoprefixer'),
concat       = require('gulp-concat'),
uglify       = require('gulp-uglify'),
browserify   = require('browserify'),
source       = require('vinyl-source-stream'),
buffer       = require('vinyl-buffer'),
rename       = require('gulp-rename'),
sourcemaps	 = require('gulp-sourcemaps'),
ngAnnotate	 = require('gulp-ng-annotate'),
sass	 	 = require('gulp-ruby-sass');


gulp.task('server', function () {
    return gulp.src('server.js')
    .pipe(server());
});

gulp.task('styles', function(){
	return sass([
			'./bower_components/angular-material/angular-material.scss',
			'./src/scss/custom.scss'
		], {sourcemap: true})
		.on('error', sass.logError)
		.pipe(concat('all.css'))
		.pipe(autoprefixer('last 1 version'))
		// .pipe(uglify())
		.pipe(sourcemaps.write('.'))
		.pipe(gulp.dest('dist/css'))
		.on('error', function($e) {

		})
});

gulp.task('scripts', ['server'], function(){
    return browserify({
    	entries: './src/js/app.js',
    	debug: true
    }).bundle()
        .pipe(source('all.js'))
        .pipe(ngAnnotate())
        .pipe(buffer())
        .pipe(sourcemaps.init({loadMaps: true}))
        // .pipe(uglify())
        // .pipe(rename('all.js'))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest("dist/js"));
});

gulp.task('watch', function() {
	gulp.watch('./src/js/**/*.js', ['scripts']);
	gulp.watch('./src/scss/**/*.scss', ['styles']);
});

gulp.task('default', ['watch','scripts', 'styles']);
