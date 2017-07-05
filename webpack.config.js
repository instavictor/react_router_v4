const path = require('path');
const webpack = require('webpack');

console.log(path.join(__dirname, "src"));

module.exports = {
  entry: './src/entry',

  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },

  // plugins: [
  //   new webpack.HotModuleReplacementPlugin() // Enable HMR
  // ],

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: '/node_modules/',
        loader: 'babel-loader',
        options: {
          presets: [['es2015', {'modules': false}], 'react']
        }
      }
    ]
  },

  devServer: {
    contentBase: path.resolve(__dirname, "src"),
    compress: false,
    port: 9000,

  }
};
