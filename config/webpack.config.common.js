const webpack = require("webpack");
const VueLoaderPlugin = require("vue-loader/lib/plugin");
const MiniCSSExtractPlugin = require("mini-css-extract-plugin");
const helpers = require("./helpers");

const isProd = process.env.NODE_ENV === 'production';

const webpackConfig = {
  resolve: {
    extensions: [".js", ".vue"],
    alias: {
      vue$: "vue/dist/vue.min.js",
      "@": helpers.root("frontend")
    }
  },
  entry: {
    blog: helpers.root("frontend", "blog-init")
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        use: [
          {
            loader: "vue-loader",
            options: {
              loaders: {
                scss: "vue-style-loader!css-loader!sass-loader",
                sass: "vue-style-loader!css-loader!sass-loader?indentedSyntax"
              }
            }
          }
        ]
      },
      {
        test: /\.js$/,
        use: [ "babel-loader" ],
        include: [helpers.root("frontend")]
      },
      {
        test: /\.css$/,
        use: [
          MiniCSSExtractPlugin.loader,
          { loader: "css-loader", options: { sourceMap: !isProd } }
        ]
      },
      {
        test: /\.scss$/,
        use: [
          MiniCSSExtractPlugin.loader,
          { loader: "css-loader", options: { sourceMap: !isProd } },
          { loader: "sass-loader", options: { sourceMap: !isProd } }
        ]
      },
      {
        test: /\.woff(2)?(\?[a-z0-9]+)?$/,
        loader: "url-loader",
        options: {
          limit: 10000,
          mimetype: "application/font-woff"
        }
      },
      {
        test: /\.(ttf|eot|svg)(\?[a-z0-9]+)?$/,
        loader: "file-loader"
      }
    ]
  },
  plugins: [
    new VueLoaderPlugin()
  ]
};

module.exports = webpackConfig;
