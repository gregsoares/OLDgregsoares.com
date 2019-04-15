const path = require('path');

module.exports = {
    entry: path.join(__dirname, 'public', 'js', 'main.js'),
    output: {
      path: path.join(__dirname, 'dist'),
      filename: 'bundle.js'
    },
    mode: 'development',
    module: {
      rules: {
        test: /\.jsx?/,
        exclude: /node_module/,
        loader: 'babel-loader',
        query: {
          presets: ['babel-preset-react']
        }
      }
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: path.join(__dirname, 'public', 'views', 'index.html')
      })
    ]
  };