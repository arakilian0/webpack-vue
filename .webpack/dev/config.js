const path = require('path')
const merge = require('webpack-merge')
const config = require('./../config.js')

module.exports = merge(config, {
  mode: 'development',
  output: {
    path: path.normalize(path.join(__dirname, '..', '..', 'src')),
    filename: '[name].bundle.js'
  }
})
