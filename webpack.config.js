var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

const DEBUG = process.env.NODE_ENV !== 'production';

module.exports = {
  devtool: 'eval',
  entry: DEBUG ?
     [
      'webpack-dev-server/client?http://localhost:3000',
      'webpack/hot/only-dev-server',
      './src/index'
    ] :
    './src/index',
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/afd/dist/'
  },
  plugins: DEBUG ? [
    new webpack.HotModuleReplacementPlugin()
  ] : [
    new ExtractTextPlugin('[name].css'),
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }
    })
  ],
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loaders: ['react-hot', 'babel'],
        include: path.join(__dirname, 'src')
      },
      {
        test: /\.css$/,
        loader: DEBUG ?
          'style-loader!css-loader' :
          ExtractTextPlugin.extract('style', 'css')
      },
      {
        test: /\.(svg|eot|otf|woff|ttf|woff2)/,
        loader: 'file-loader?name=[name]@[hash].[ext]'
      }
    ]
  },
  resolve: {
    alias: {
      '#components': __dirname + '/src/components'
    }
  }
};
