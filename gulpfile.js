'use strict';

var gulp = require('gulp');
var webpack = require('webpack');
var less = require('gulp-less');
var gulpPlumber = require('gulp-plumber');
var path = require('path');
var livereload = require('gulp-livereload');
var webpackConfig = require('./webpack.config');
var WebpackDevServer = require('webpack-dev-server');

gulp.task('less', function() {
    return gulp.src('./src/less/main.less')
        .pipe(gulpPlumber(onStreamError))
        .pipe(less({
            paths: [path.join(__dirname, 'src', 'less'), path.join(__dirname, 'node_modules') ]
        }))
        .pipe(gulp.dest('./public/css'))
        .pipe(livereload());
});

gulp.task('watch', function() {
    livereload.listen();
    gulp.watch('./src/less/**/*.less', ['less']);
});

gulp.task('webpack-dev-server', function() {
    var compiler = webpack(webpackConfig);

    new WebpackDevServer(compiler, {
        contentBase: 'public',
        stats: { colors: true }
    }).listen(8080, 'localhost', function(err) {
            console.log('Server started');
        });
});

// Display error message but continue watching
function onStreamError(err) {
    console.log(err.message);
    this.emit('end'); // End task causing error
}

gulp.task('default', ['less', 'watch'], function() {});
