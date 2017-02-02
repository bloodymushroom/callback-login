var path = require('path');
var webpack = require('webpack');

module.exports = {
  entry: [
    'react-hot-loader/patch',
    // activate HMR for React

    'webpack-dev-server/client?http://localhost:8080',
    // bundle the client for webpack-dev-server
    // and connect to the provided endpoint

    'webpack/hot/only-dev-server',

    './client/app.js'
  ],
  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, 'dist'),
    publicPath: '/dist/'
  },
  devServer: {
    hot: true,
    // contentBase: path.join(__dirname, 'dist'),
    outputPath: path.join(__dirname, 'dist')
  },
  module: {
    rules: [{
      test: /\.js$/,
      exclude: /node_modules/,
      use: [ 'babel-loader' ]
    }, {
      test: /\.css$/,
      use: [ 'css-loader' ]// This are the loaders
    }]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    // enable HMR globally

    new webpack.NamedModulesPlugin(),
    // prints more readable module names in the browser console on HMR updates
  ],
}