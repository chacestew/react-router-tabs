/* This webpack config is to build and serve the example */
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { resolve } = require("path");

const paths = {
  src: resolve("./src"),
  entry: resolve("./example/src/index.js"),
  output: resolve("./example/src/build"),
  html: resolve("./example/src/index.html")
};

module.exports = {
  entry: paths.entry,
  output: {
    path: paths.output,
    filename: "bundle.js",
    publicPath: "/"
  },
  resolve: {
    extensions: [".js"],
    alias: { "react-router-tabs": paths.src }
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader"
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
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
