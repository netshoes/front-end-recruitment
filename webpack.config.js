'use strict';

var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  devtool: 'inline-source-map',
  entry: [
    './scripts/index'
  ],
  output: {
    path: __dirname + '/public/scripts/',
    filename: 'bundle.js',
    publicPath: '/public/scripts/'
  },
  plugins: [
    new webpack.NoErrorsPlugin(),
    new ExtractTextPlugin('../styles/bundle.css')
  ],
  resolve: {
    extensions: ['', '.js']
  },
  module: {
    loaders: [
      { test: /\.js$/, loaders: ['babel?experimental&sourceMap="inline"'], exclude: /node_modules/ },
      { test: /\.scss$/, 'loader': ExtractTextPlugin.extract('css-loader!sass?outputStyle=expanded') },

      // inline base64 URLs for <=8k images, direct URLs for the rest
      {test: /\.(png|jpg)$/, loader: 'url-loader?limit=8192'},
      {test: /\.(eot|eot\?|svg|ttf|woff|woff2)$/, loader: 'url-loader'}
    ]
  }
};
