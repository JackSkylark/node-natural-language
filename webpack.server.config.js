var webpack = require('webpack');
var path = require('path');
var fs = require('fs');

const nodeModules = fs.readdirSync('node_modules')
  .filter(function(x) {
    return ['.bin'].indexOf(x) === -1;
  });

const config = {
    entry: [
      "babel-polyfill",
      './ts/server/main.ts'
    ],
    target: 'node',
    output: {
        path: __dirname,
        filename: 'main.js'
    },
    module: {
        loaders: [
            {test: /\.ts(x)?$/, exclude: /node_modules/, loader: 'babel-loader?presets[]=es2015!ts-loader'},
            {test: /\.js$/, exclude: /node_modules/, loaders: ['babel-loader?presets[]=es2015'] },
        ]
    },
    resolve: {
        root: path.join(__dirname, 'ts'),
        extensions: ['', '.webpack.js', '.web.js', '.ts', '.tsx', '.js']
    },
    externals: [
      function(context, request, callback) {
        var pathStart = request.split('/')[0];
        if (nodeModules.indexOf(pathStart) >= 0 && request != 'webpack/hot/signal.js') {
            return callback(null, "commonjs " + request);
        };
        callback();
      }
    ],
    plugins: [
        new webpack.IgnorePlugin(/\.(css|less)$/),
        new webpack.BannerPlugin('require("source-map-support").install();', { raw: true, entryOnly: false }),
    ]
}

// DEBUG CONFIG 
if(process.env.NODE_ENV !== 'production') {
  config.devtool = 'source-map';
  config.debug = true;
  config.output.devtoolModuleFilenameTemplate = '[absolute-resource-path]';
  config.output.devtoolFallbackModuleFilenameTemplate = '[absolute-resource-path]?[hash]';
}

module.exports = config;