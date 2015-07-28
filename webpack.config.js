'use strict';

var path = require('path');

var webpackConfig = {
    entry: './src/js/app.js',
    output: {
        path: __dirname + '/public/js',
        filename: 'app.bundle.js'
    },
    devtool: 'eval',
    resolve: {
        alias: {}
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /(node_modules|public)/
            }
        ]
    }
};

module.exports = webpackConfig;
