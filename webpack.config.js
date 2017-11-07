const path = require('path');
 
module.exports = {
  context: path.join(__dirname, 'routes'),
  entry: [
    './index.js',
  ],
  output: {
    path: path.join(__dirname, 'views'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude:['/node_modules/'],
        loader:['babel-loader']
      },
      {
        test: /\.css$/,
        loader:['style-loader', 'css-loader'] 
      },
      {
        test: /\.(png|woff|woff2|eot|ttf|svg|jpg)$/,
        loader: 'url-loader?limit=100000'
      }
    ],
  },
  resolve: {
    modules: [
      path.join(__dirname, 'node_modules'),
    ],
  },
};