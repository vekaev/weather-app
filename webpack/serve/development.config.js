const path = require('path');
const webpack = require('webpack');
const autoprefixer = require('autoprefixer');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const PrettierPlugin = require('prettier-webpack-plugin');

module.exports = function() {
  return {
    mode: 'development',
    entry: './src',
    output: {
      filename: 'bundle.js',
      path: path.resolve(__dirname, '../../dist'),
      publicPath: '/'
    },
    resolve: {
      extensions: ['.js', '.jsx', '.css', '.scss', '.json']
    },
    devtool: 'inline-source-map',
    // fix build listeners for windows and WSL
    watchOptions: {
      poll: true
    },
    devServer: {
      contentBase: path.resolve(__dirname, '../../public'),
      compress: true,
      hot: true,
      port: 3000,
      historyApiFallback: true
    },
    plugins: [
      // add browser prefixes into css for dev build
      new webpack.LoaderOptionsPlugin({
        options: {
          postcss: [
            autoprefixer()
          ],
        },
      }),
      // clone dev html page into build directory
      new HtmlWebpackPlugin({
        template: path.resolve(__dirname, '../../public/index.html')
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
            'style-loader',
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
            'style-loader',
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
            'style-loader',
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
            'style-loader',
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
