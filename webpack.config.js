const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = {
  entry: './views/src/index.js',
  output: {
    path: path.join(__dirname, '/views', '/dist'),
    filename: 'webpack.bundle.js'
  },
   module: {
    rules: [
      { test: /\.js$/,
        exclude: /node_modules/,
        use: {
            loader: 'babel-loader'
        }  
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './views/src/index.html'
    })
  ]
};
