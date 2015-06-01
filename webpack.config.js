var Webpack = require('webpack');
var path = require('path');
var nodeModulesPath = path.resolve(__dirname, 'node_modules');
var buildPath = path.resolve(__dirname, 'public', 'build');
var mainPath = path.resolve(__dirname, 'app', 'main.js');
var BowerWebpackPlugin = require('bower-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');


var config = {

  // Makes sure errors in console map to the correct file
  // and line number
  devtool: 'eval',
  entry: {
    app: [
      'webpack-dev-server/client?http://localhost:8080',
      'webpack/hot/dev-server',
      mainPath
    ],
    vendors: ['react']
  },
  output: {

    // We need to give Webpack a path. It does not actually need it,
    // because files are kept in memory in webpack-dev-server, but an
    // error will occur if nothing is specified. We use the buildPath
    // as that points to where the files will eventually be bundled
    // in production
    path: buildPath,
    filename: 'bundle.js',

    // Everything related to Webpack should go through a build path,
    // localhost:3000/build. That makes proxying easier to handle
    publicPath: '/build/'
  },
  module: {

    loaders: [

    // I highly recommend using the babel-loader as it gives you
    // ES6/7 syntax and JSX transpiling out of the box
    {
      test: /\.jsx?$/,
      loader: 'babel',
      exclude: [nodeModulesPath]
    },
    {
      test: /\.css$/,
      loader: ExtractTextPlugin.extract('css')
    }

    ]
  },

  // We have to manually add the Hot Replacement plugin when running
  // from Node
  plugins: [
    new Webpack.HotModuleReplacementPlugin(),
    new Webpack.optimize.CommonsChunkPlugin({
      name: "vendors",

      filename: "vendor.bundle.js",

      minChunks: Infinity
      // (with more entries, this ensures that no other module
      //  goes into the vendor chunk)
    }),
    new BowerWebpackPlugin(),
    new ExtractTextPlugin('style.css')
  ]
};

module.exports = config;
