const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const nodeExternals = require('webpack-node-externals');
const webpack = require('webpack');
const path = require('path');

module.exports = [
  {
    name: 'client',
    context: __dirname,
    entry: [
      'babel-polyfill',
      'webpack-hot-middleware/client?reload=true',
      'react-hot-loader/patch',
      './client/index.jsx'
    ],
    output: {
      filename: 'bundle.js',
      path: path.resolve(__dirname, './client/dist'),
      publicPath: '/',
    },
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
    module: {
      rules: [
        {
          test: /\.jsx?$/,
          exclude: /node_modules/,
          loader: "babel-loader"
        }
      ]
    }
  },
  {
    name: 'server',
    context: __dirname,
    entry: [
      'babel-polyfill',
      'webpack-hot-middleware/client?reload=true',
      'react-hot-loader/patch',
      './client/index.jsx'
    ],
    output: {
      filename: 'bundle.js',

    },
    name: 'server',
    context: __dirname,
    target: 'node',
    entry: './middleware/server-middleware.js',
    output: {
      filename: 'server.js',
      path: path.resolve(__dirname, './client/dist'),
      libraryTarget: 'commonjs2'
    },
    devtool: 'inline-source-map',
     devServer: {
       contentBase: './client/dist',
       hot: true
    },
    plugins: [
      new webpack.NamedModulesPlugin()
    ],
    externals: [nodeExternals()],
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
]
