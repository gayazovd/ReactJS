const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
  template: path.join(__dirname, 'index', 'index.html'),
  filename: 'index.html',
  inject: true
});

const DefinePluginConfig = new webpack.DefinePlugin({
  'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
});

const MiniCssExtractPluginConfig = new MiniCssExtractPlugin({
  filename: '[name].css',
  chunkFilename: '[id].css'
});

const isDevmode = process.env.NODE_ENV === 'development';

module.exports = {
  mode: process.env.NODE_ENV,
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.(png|jpg|gif)$/i,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 819299
            }
          }
        ]
      }
    ]
  },

  plugins: [/* HtmlWebpackPluginConfig, */ DefinePluginConfig /* MiniCssExtractPluginConfig */],
  output: {
    path: path.resolve('./public'),
    filename: 'js/[name].js'
  }
};
