const path = require('path')

module.exports = {
  entry: './src/index.js',
  output: {
    path: {
      path: path.resolve(__dirname, 'dist'),
      filename: 'bundle.js'
    }
  }
}
