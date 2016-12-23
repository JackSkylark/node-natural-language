var webpack = require('webpack');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var path = require('path');
var fs = require('fs');

const config = {
    entry: [
        "babel-polyfill",
        './ts/client/index.tsx'
    ],
    output: {
        path: path.join(__dirname, 'public', 'scripts'),
        filename: 'app.bundle.js',
    },
    module: {
        loaders: [
            {test: /\.ts(x)?$/, exclude: /node_modules/, loader: 'babel-loader?presets[]=es2015!ts-loader'},
            {test: /\.js$/, exclude: /node_modules/, loaders: ['babel-loader?presets[]=es2015'] }
        ]
    },
    resolve: {
        extensions: ['', '.webpack.js', '.web.js', '.ts', '.tsx', '.js']
    }
}

// DEBUG CONFIG 
if(process.env.NODE_ENV !== 'production') {
  config.devtool = 'source-map';
  config.debug = true;
}

module.exports = config;
