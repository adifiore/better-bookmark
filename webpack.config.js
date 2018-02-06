const path = require('path');
const webpack = require('webpack');


module.exports = {
  entry: './client/index.jsx',
  output: {
    path: path.join(__dirname, '/build'),
    filename: 'bundle.js',
    publicPath: '/build/'
  },
  module: {
    loaders: [
      {
        test: /.(js|jsx)$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets:[ 'es2015', 'react', 'stage-2' ]
        }
      }
    ]
  },
}
