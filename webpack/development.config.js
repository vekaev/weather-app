const path = require('path');
const webpack = require('webpack');
const autoprefixer = require('autoprefixer');

const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const PrettierPlugin = require('prettier-webpack-plugin');

module.exports = function({ paths }) {
  return {
    mode: 'development',
    entry: './src',
    output: {
      filename: 'bundle.dev.js',
      path: path.resolve(__dirname, `../${paths.js}`),
    },
    resolve: {
      extensions: ['.js', '.jsx', '.css', '.scss', '.json']
    },
    devtool: 'inline-source-map',
    // fix build listeners for windows and WSL
    watchOptions: {
      poll: true
    },
    plugins: [
      // css extractor
      new MiniCssExtractPlugin({ filename: `../${paths.css}/bundle.dev.css` }),
      // add browser prefixes into css for dev build
      new webpack.LoaderOptionsPlugin({
        options: {
          postcss: [
            autoprefixer()
          ],
        },
      }),
      // plugin for prettier
      new PrettierPlugin()
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
                modules: true,
                sourceMap: true
              }
            },
            {
              loader: 'sass-loader',
              options: {
                sourceMap: true
              }
            }
          ]
        },
        // for global sass files
        {
          test: /\.s(a|c)ss$/,
          loader: [
            { loader: MiniCssExtractPlugin.loader },
            {
              loader: 'css-loader',
              options: {
                sourceMap: true
              }
            },
            {
              loader: 'sass-loader',
              options: {
                sourceMap: true
              }
            }
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
                modules: true,
                sourceMap: true
              }
            }
          ]
        },
        // for global css files
        {
          test: /\.css$/,
          use: [
            { loader: MiniCssExtractPlugin.loader },
            {
              loader: 'css-loader',
              options: {
                sourceMap: true
              }
            }
          ],
          exclude: /\.module\.css$/
        }
      ]
    }
  };
};
