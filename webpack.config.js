const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const path = require('path');

module.exports = {
  entry: [
    'babel-polyfill',
    'react-hot-loader/patch',
    './client/index.jsx'
  ],
  devtool: 'inline-source-map',
   devServer: {
     contentBase: './client/dist',
     hot: true
  },
  plugins: [
    new CleanWebpackPlugin(['dist']),
    // new HtmlWebpackPlugin({
    //   title: 'Hot Module Replacement'
    // }),
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin()
    ],
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, './client/dist'),
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: "babel-loader"
      }
    ]
  }
}
