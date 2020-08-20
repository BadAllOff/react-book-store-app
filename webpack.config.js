var path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const FaviconsWebpackPlugin = require("favicons-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  mode: "production",
  entry: { index: "./src/index.js" },
  devServer: {
    contentBase: path.join(__dirname, "dist"),
    compress: true,
    port: 9000,
  },
  output: { filename: "[name].js" },
  module: {
    rules: [
      { test: /\.js$/, use: "babel-loader" },
      { test: /\.css$/i, use: [MiniCssExtractPlugin.loader, "css-loader"] },
      {
        test: /\.(png|woff|woff2|eot|ttf|svg)$/,
        use: "url-loader?limit=100000",
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html",
    }),
    new FaviconsWebpackPlugin({
      logo: "./src/static/favicon.svg",
      cache: true,
    }),
    new MiniCssExtractPlugin(),
  ],
};
