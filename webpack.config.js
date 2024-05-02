const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
  entry: 'index.js',
  devServer: {
    historyApiFallback: true    
  },
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'index_bundle.js',
    publicPath: "/thuyloi",
  },
  plugins: [new HtmlWebpackPlugin({
    filename: "index.html"
  })],
};