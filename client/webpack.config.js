const path = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    entry: path.join(__dirname, 'src', 'index.js'),
    output: {
      filename: 'bundle.js',
      sourceMapFilename: 'bundle.map',
      path: path.resolve(__dirname, 'build'),
      publicPath: '/'
    },
    devtool: '#source-map',
    mode: 'development',
    module: {
      rules: [{
        test: /\.jsx?/,
        exclude: /(node_modules)/,
        loader: 'babel-loader',
        query: {
          'presets': ['@babel/preset-env', '@babel/preset-react']
        }
      }]
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: path.join(__dirname, 'public', 'index.html')
      })
    ]
  };