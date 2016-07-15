var webpack = require('webpack');
var path    = require('path');
// var ExtractTextPlugin = require("extract-text-webpack-plugin");
var config  = require('./webpack.config');

config.output = {
  filename: '[name].bundle.js',
  publicPath: '',
  path: path.resolve(__dirname, 'public')
};

config.plugins = config.plugins.concat([

  // Reduces bundles total size
  new webpack.optimize.UglifyJsPlugin({
    mangle: {

      // You can specify all variables that should not be mangled.
      // For example if your vendor dependency doesn't use modules
      // and relies on global variables. Most of angular modules relies on
      // angular global variable, so we should keep it unchanged
      except: ['$super', '$', 'exports', 'require', 'angular']
    }
  })
  // new ExtractTextPlugin("[name].css")
]);

// config.module.loaders[3].loader = ExtractTextPlugin.extract("css-loader!less-loader");
// config.module.loaders[4].loader = ExtractTextPlugin.extract("css-loader");

module.exports = config;
