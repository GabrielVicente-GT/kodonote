const path = require('path')
const htmlwebpackplugin = require("html-webpack-plugin")

module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
  },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"],
          },
        },
      }, {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset',
      }, {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  plugins: [
    new htmlwebpackplugin({
      template: path.join(__dirname, "./public/index.html"),
    }),
  ],
  devServer: {
    static: {
        directory: path.join(__dirname, "public")
      },
      compress: true,
      port: 3010,
      historyApiFallback: true,
  },
}