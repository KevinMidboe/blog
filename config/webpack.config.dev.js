const webpack = require("webpack");
const FriendlyErrorsPlugin = require("friendly-errors-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const helpers = require("./helpers");
// const environment = require("./env/dev.env");
const MiniCSSExtractPlugin = require("mini-css-extract-plugin");

let webpackConfig = {
  mode: "development",
  devtool: "eval-cheap-module-source-map",
  output: {
    publicPath: "/",
    filename: "js/[name].bundle.js"
  },
  optimization: {
    concatenateModules: true,
    splitChunks: {
      chunks: "initial"
    }
  },
  plugins: [
    new FriendlyErrorsPlugin(),
    new MiniCSSExtractPlugin({
      filename: "css/[name].css"
    }),
    new HtmlWebpackPlugin({
      template: "frontend/templates/Index.html"
    })
  ],
  devServer: {
    compress: true,
    historyApiFallback: true,
    host: "0.0.0.0",
    hot: true,
    overlay: true,
    stats: {
      normal: true
    },
    proxy: {
      "/api": {
        target: "http://localhost:30010",
        changeOrigin: false
      }
    },
    writeToDisk: false
  }
};

module.exports = webpackConfig;
