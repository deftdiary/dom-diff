const path = require('path')

module.exports = {
  entry: './src/index.js',
  output: {
    publicPath: 'deft',
    filename: 'bundle.js'
  },
  devServer: {
    port: 7003,
    contentBase: 'www'
  }
}
