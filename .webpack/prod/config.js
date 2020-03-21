const path = require('path')
const merge = require('webpack-merge')
const config = require('./../config.js')

module.exports = merge(config, {
  mode: 'production',
  output: {
    path: path.normalize(path.join(__dirname, '..', '..', 'dist')),
    filename: '[name].[contenthash].js'
  }
})
