'use strict';
var webpack = require('webpack');
var path = require('path');
var cssnext = require("postcss-cssnext");
var BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
module.exports = {
  entry: {
    app: [
      'webpack-dev-server/client?http://localhost:8080',
      'webpack/hot/only-dev-server',
      path.resolve(__dirname, './spa/entry.js')
    ],
    compatibility: [
      'webpack-dev-server/client?http://localhost:8080',
      'webpack/hot/only-dev-server',
      path.resolve(__dirname, './spa/compatibility.js')
    ]
  },
  output: {
    filename: '[name].js',
    publicPath: 'http://localhost:8080/assets/'
  },
  module: {
    rules: [
      { test: /\.(png|jpg|jpeg|svg|gif)$/,
        exclude: /node_modules/,
        use: {
          loader: 'file-loader',
          query: {
            name: '[name].[ext]'
          }
        }
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['react', 'es2015', 'stage-3'],
            plugins: ['react-hot-loader/babel']
          }
        }
      },
      {
        test: /^((?!\.plugin.).)*(css|scss|sass)$/,
        exclude: /node_modules/,
        include: [/components/, /spa/, /styles/],
        use: [
          "style-loader",
          {
            loader: 'css-loader',
            query: {
              localIdentName: '[local]--[hash:base64:5]',
              modules: true,
              minimize: false
            }
          },
          'sass-loader'
        ]
      },
      {
        test: /^((?!\.plugin.).)*(css|scss|sass)$/,
        exclude: [/components/, /spa/, /styles/],
        include: /node_modules/,
        use: [
          {
            loader: 'style-loader'
          },
          {
            loader: 'css-loader',
            query: {
              localIdentName: '[local]--[hash:base64:5]',
              modules: true,
              minimize: false
            }
          },
          {
            loader: "postcss-loader",
            options: {
              plugins() {
                return [cssnext];
              }
            }
          },
          {
            loader: 'sass-loader'
          }
        ]
      },
      {
        test: /\.plugin.(css|scss|sass)$/,
        exclude: /node_modules/,
        include: [/components/, /spa/, /styles/],
        use: [
          "style-loader",
          {
            loader: 'css-loader',
            query: {
              minimize: false
            }
          },
          'sass-loader'
        ]
      }
    ]
  },
  devServer: {
    hot: true,
    inline: true,
    headers: {
      'Access-Control-Allow-Origin': '*'
    }
  },
  resolve: {
    alias: {
      "components": path.resolve(__dirname, './components'),
      "spa": path.resolve(__dirname, './spa'),
      "styles": path.resolve(__dirname, './styles')
    },
    extensions: ['.js', '.jsx', '.sass', '.scss', '.css', '.png', '.jpg', '.svg']
  },
  optimization: {
    minimize: false,
  },
  plugins: [
    new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/),
    new webpack.HotModuleReplacementPlugin(),
    new BundleAnalyzerPlugin()
  ],
  mode: 'development',
  devtool: '#source-map'
};
