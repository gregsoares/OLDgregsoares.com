const path = require('path');

module.exports = {
    entry: path.join(__dirname, 'client', 'src', 'js', 'main.js'),
    output: {
      path: path.join(__dirname, 'build'),
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
        template: path.join(__dirname, 'client', 'public', 'index.html')
      })
    ]
  };