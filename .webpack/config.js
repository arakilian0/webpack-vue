const path = require('path')

module.exports = {
  mode: 'development',
  entry: path.normalize(path.join(__dirname, '..', 'src', 'main.js')),
  output: {
    path: path.normalize(path.join(__dirname, '..', 'src')),
    filename: 'bundle.js'
  }
}
