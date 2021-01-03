const environment = (process.env.NODE_ENV || "development").trim();
const { merge } = require("webpack-merge");

const commonConfig = require('./config/webpack.config.common');
const devConfig = require("./config/webpack.config.dev");
const prodConfig = require("./config/webpack.config.prod");

console.log('environment', process.env.NODE_ENV)
if (environment === "development") {
  module.exports = merge(commonConfig, devConfig);
} else {
  module.exports = merge(commonConfig, prodConfig);
}
