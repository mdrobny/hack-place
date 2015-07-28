'use strict';

var gulp = require('gulp'),
    webpack = require('webpack'),
    less = require('gulp-less'),
    path = require('path'),
    livereload = require('gulp-livereload'),
    webpackConfig = require('./webpack.config');
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

gulp.task('webpack', function() {
    return gulp.src('./src/js/app.js')
        .pipe(gulpPlumber(onStreamError))
        .pipe(webpack(require('./webpack.config.js')))
        .pipe(gulp.dest('./public/js'))
        .pipe(livereload());
});

gulp.task('watch', function() {
    livereload.listen();
    gulp.watch('./src/less/**/*.less', ['less']);
    gulp.watch(['./src/js/**/*.js'], ['webpack']);
});

gulp.task('webpack-dev-server', function() {
    var compiler = webpack(webpackConfig);


});

// Display error message but continue watching
function onStreamError(err) {
    console.log(err.message);
    this.emit('end'); // End task causing error
}



// Kill server application if error is not handled
//process.on('uncaughtException', function(err) {
//    console.log('Caught exception: ' + err);
//    if (appServer) {
//        appServer.kill();
//    }
//});

gulp.task('default', ['less', 'webpack', 'watch'], function() {});
