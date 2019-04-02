const merge = require('webpack-merge');
const nodeExternals = require('webpack-node-externals');
const common = require('./webpack.config.common');
const autoprefixer = require('autoprefixer');

const CSSModuleLoader = {
  loader: 'css-loader/locals',
  options: {
    modules: true,
    sourceMap: true,
    localIdentName: '[local]__[hash:base64:5]'
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

module.exports = merge(common, {
  name: 'server',
  target: 'node',
  entry: './src/serverRenderer.js',
  externals: [nodeExternals()],
  output: {
    filename: 'js/serverRenderer.js',
    libraryTarget: 'commonjs2'
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          { loader: 'isomorphic-style-loader' },
          {
            loader: 'css-loader', // It doesn't embed CSS but only exports the identifier mappings.
            options: {
              modules: true,
              localIdentName: '[name]-[hash:5]'
            }
          },
          { loader: 'sass-loader' }
        ]
      }
      /* {
        test: /\.s[c|a]ss$/,
        use: [
          {
            loader: 'css-loader/locals',
            options: {
              modules: true,
              importLoaders: 2
            }
          },
          { loader: 'sass-loader' }
          'style-loader',
          CSSModuleLoader,
          postCSSLoader,
          'sass-loader'
        ]
      } */
    ]
  }
});
