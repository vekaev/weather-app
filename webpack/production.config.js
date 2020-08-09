const path = require('path');
const webpack = require('webpack');
const autoprefixer = require('autoprefixer');

const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const CompressionPlugin = require('compression-webpack-plugin');

module.exports = function({ paths }) {
  return {
    mode: 'production',
    entry: './src',
    output: {
      filename: 'bundle.js',
      path: path.resolve(__dirname, `../${paths.js}`),
    },
    resolve: {
      extensions: ['.js', '.jsx', '.css', '.scss', '.json']
    },
    plugins: [
      // minify css plugin
      new MiniCssExtractPlugin({ filename: `../${paths.css}/bundle.css` }),
      // add browser prefixes into prod build
      new webpack.LoaderOptionsPlugin({
        options: {
          postcss: [
            autoprefixer()
          ],
        },
      }),
      // compress prod build with .gz
      new CompressionPlugin(),
    ],
    module: {
      rules: [
        // for ES
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader'
          }
        },
        // for sass modules
        {
          test: /\.module\.s(a|c)ss$/,
          loader: [
            { loader: MiniCssExtractPlugin.loader },
            {
              loader: 'css-loader',
              options: {
                importLoaders: 1,
                modules: true
              }
            },
            'postcss-loader',
            'sass-loader',
          ]
        },
        // for global sass files
        {
          test: /\.s(a|c)ss$/,
          loader: [
            { loader: MiniCssExtractPlugin.loader },
            'css-loader',
            'postcss-loader',
            'sass-loader',
          ],
          exclude: /\.module\.s(a|c)ss$/
        },
        // for css modules
        {
          test: /\.module\.css$/,
          use: [
            { loader: MiniCssExtractPlugin.loader },
            {
              loader: 'css-loader',
              options: {
                importLoaders: 1,
                modules: true
              }
            },
            'postcss-loader',
          ]
        },
        // for global css files
        {
          test: /\.css$/,
          use: [
            { loader: MiniCssExtractPlugin.loader },
            'css-loader',
            'postcss-loader',
          ],
          exclude: /\.module\.css$/
        }
      ]
    },
    optimization: {
      minimize: true,
      minimizer: [new TerserPlugin()],
    }
  };
};
