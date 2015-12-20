'use strict';

var path = require('path');

const NODE_ENV = process.env.NODE_ENV || 'development';
const webpack = require("webpack");

module.exports = {
  entry: 'js/app.js',
  output: {
      path: path.join(__dirname, './public/dist'),
      filename: 'YoutubeSlider.js'
  },

  resolve: {
    extensions: ['.js']
  },

  watch: NODE_ENV == 'development',

  watchOptions: {
    aggregateTimeout: 100
  },

  devtool: [
    NODE_ENV == 'development' ? "cheap-inline-module-source-map" : null,
    'source-map'
  ],

  module: {
    loaders: [
      { test: /\.css$/, loader: "style-loader!css-loader" },
    ]
  },

  plugins: [
    new webpack.DefinePlugin({
      NODE_ENV:JSON.stringify(NODE_ENV)
    })
  ]
};