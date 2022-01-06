const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: path.join(__dirname, "src", "index.js"),
  output: {
    path: path.resolve(__dirname, "dist"),
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, "src", "index.html"),
    }),
  ],
  resolve: {
    fallback: {
      util: require.resolve("util/"),
      crypto: require.resolve("crypto-browserify"),
      assert: false,
      stream: require.resolve("stream-browserify"),
      http: require.resolve("stream-http"),
      url: false,
      https: require.resolve("https-browserify"),
      os: require.resolve("os-browserify/browser")
    }
  },
  // ...
};
