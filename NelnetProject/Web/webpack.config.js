"use strict";

var webpack = require('webpack');
var webpackNotifierPlugin = require('assets-webpack-plugin');
require('es6-promise').polyfill();

module.exports = {
    devtool: 'inline-source-map',
    entry: {
        index: "./Nelnet_UI/source/index.js"
    },
    output: {
        filename: "./Nelnet_UI/build/[name].js"
    },
    module: {
        loaders: [
            { test: /\.js$/, loader: "babel-loader" },
            { test: /\.(s)?css$/, loader: "style-loader!css-loader!sass-loader" },
            { test: /\.html$/, loader: "html-loader" },
            { test: /\.(png|jpg|jpeg|gif|svg|bmp)$/, loader: "file-loader" }
        ]
    },
    plugins: [
        new webpackNotifierPlugin()
    ]
};