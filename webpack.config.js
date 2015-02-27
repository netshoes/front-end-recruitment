'use strict';

let webpack = require('webpack');

module.exports = {
  devtool: 'eval',
  entry: [
    './scripts/index'
  ],
  output: {
    path: __dirname + '/public/scripts/',
    filename: 'bundle.js',
    publicPath: '/public/scripts/'
  },
  plugins: [
    new webpack.NoErrorsPlugin()
  ],
  resolve: {
    extensions: ['', '.js']
  },
  module: {
    loaders: [
      { test: /\.js$/, loaders: ['babel?experimental&sourceMap="inline"'], exclude: /node_modules/ },
      { test: /\.scss$/, 'loader': 'style!css!sass?outputStyle=expanded' }
    ]
  }
};
