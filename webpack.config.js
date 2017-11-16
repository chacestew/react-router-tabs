/* This webpack config is to build and serve the example */

const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const p = s => path.join(__dirname, s);

const paths = {
  entry: p('example/src/index.js'),
  output: p('example/build'),
  html: p('example/src/index.html')
};

module.exports = {
  entry: paths.entry,
  output: {
    path: paths.output,
    filename: 'bundle.js',
    publicPath: '/'
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: paths.html
    })
  ],
  devServer: {
    historyApiFallback: true,
    contentBase: paths.output,
    port: 8000
  }
};
