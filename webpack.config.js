// webpack.config.js
const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

module.exports = {
  mode: "development",
  entry: "./src/index.js",
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist"),
    clean: true,
  },
  devtool: "eval-source-map",
  devServer: {
  static: {
    directory: path.resolve(__dirname, "dist"),
  },
  watchFiles: ["src/**/*"], // watch all files in src
  open: true,                // auto-open browser
  hot: true,                 // enable hot module reload (for CSS, JS)
},


  plugins: [
    new HtmlWebpackPlugin({
        template: "./src/template.html",
    }),
  ],
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
};
