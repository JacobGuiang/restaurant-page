const path = require('path');

module.exports = {
  entry: {
    index: './src/index.js',
    loadHome: './src/loadHome.js',
    loadMenu: './src/loadMenu.js',
    loadContact: './src/loadContact.js',
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
    ],
  },
  devtool: 'inline-source-map',
};