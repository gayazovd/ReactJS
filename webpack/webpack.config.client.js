const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const autoprefixer = require('autoprefixer');
const common = require('./webpack.config.common');

const CSSModuleLoader = {
  loader: 'css-loader',
  options: {
    modules: true,
    sourceMap: true,
    localIdentName: '[name]-[hash:5]'
  }
};

const postCSSLoader = {
  loader: 'postcss-loader',
  options: {
    plugins: [
      autoprefixer({
        browsers: ['ie >= 8', 'last 4 version']
      })
    ],
    sourceMap: true
  }
};

const isDevMod = process.env.NODE_ENV === 'development';

module.exports = merge(common, {
  name: 'client',
  target: 'web',

  entry: [isDevMod && 'webpack-hot-middleware/client', './src/client.js'].filter(Boolean),

  module: {
    rules: [
      {
        test: /\.s[c|a]ss$/,
        use: [
          isDevMod ? 'style-loader' : MiniCssExtractPlugin.loader,
          CSSModuleLoader,
          postCSSLoader,
          'sass-loader'
        ]
      }
    ]
  },

  plugins: [
    // !isDevMod && new CleanWebpackPlugin('./public', { root: path.resolve(__dirname, '../') }),
    isDevMod && new webpack.HotModuleReplacementPlugin(),
    /**
     * This plugin extract CSS into separate files.
     * It creates a CSS file per JS file which contains CSS.
     * It supports On-Demand-Loading of CSS and SourceMaps.
     * @link https://webpack.js.org/plugins/mini-css-extract-plugin/#minimizing-for-production
     */
    new MiniCssExtractPlugin({
      filename: 'css/[name].css'
    })
  ].filter(Boolean)
});
