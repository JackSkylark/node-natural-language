var webpack = require('webpack');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var path = require('path');
var fs = require('fs');

const config = {
    entry: [
        './styles/index.less'
    ],
    output: {
        path: path.join(__dirname, 'public', 'styles'),
        filename: 'app.bundle.css',
    },
    module: {
        loaders: [
            {test: /\.less$/, include: /\.less$/, loader: ExtractTextPlugin.extract("style-loader", "css!less")}
        ]
    },
    plugins: [
        new ExtractTextPlugin('app.bundle.css')
    ]
}

module.exports = config;
