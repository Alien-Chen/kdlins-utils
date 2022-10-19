const webpack = require('webpack');
const path = require('path');

const { name } = require('../package.json');

const rootPath = path.resolve(__dirname, '../');

module.exports = {
  mode: 'production',
  entry: {
    kdlinsUtils: path.resolve(rootPath, 'src/index.js'),
  },
  output: {
    filename: '[name].min.js',
    path: path.resolve(rootPath, 'dist'),
    // library: `${name}`,
    // libraryTarget: 'umd',
    globalObject: 'this',
    library: {
      name: 'kdlinsUtils',
      type: 'umd',
    },
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
      },
    ],
  },
  plugins: [new webpack.optimize.ModuleConcatenationPlugin()],
};
