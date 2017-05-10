const path = require('path')

module.exports = {
  entry: path.resolve('./src/index.js'),
  output: {
    path: path.resolve('./'),
    filename: "index.js"
  },
  devServer: {
    port: 8080,
    historyApiFallback: true
  },
  module: {
    loaders: [
      {
        test: /\.js?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015', 'stage-0'],
        }
      }
    ]
  }
}