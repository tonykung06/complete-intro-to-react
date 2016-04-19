const path = require('path');

module.exports = {
  context: __dirname,
  entry: './js/BrowserEntry.jsx',
  devtool: 'inline-source-map',
  output: {
    path: path.join(__dirname, '/public'),
    filename: 'bundle.js',
    publicPath: '/public/'//path to serve static files, webpack has to know this when it tries to grab chunked bundles for different pages
  },
  resolve: {
    extensions: ['', '.js', '.jsx', '.json']
  },
  stats: {
    colors: true,
    reasons: true,
    chunks: true
  },
  module: {
    preLoaders: [{
      test: /\.jsx?$/,
      loader: 'eslint-loader',
      exclude: /node_modules/
    }],
    loaders: [{
      test: /\.jsx?$/,
      loader: 'babel-loader'
    }, {
      test: /\.json$/,
      loader: 'json-loader'
    }]
  }
};
