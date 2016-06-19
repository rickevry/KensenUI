var webpack = require('webpack');
var path = require('path');

//var BUILD_DIR = path.resolve(__dirname, 'src/client/public');
var BUILD_DIR = path.resolve(__dirname, '../Proton Future Web/Proton Future Web/Proton.Web/Scripts/react');
var APP_DIR = path.resolve(__dirname, 'src/client/app');

var config = {
  entry: APP_DIR + '/webshop/index.jsx',
  output: {
    path: BUILD_DIR,
    filename: 'webshop-bundle.js',
    libraryTarget: 'var',
    library: 'ReactRenderer'
  },

  resolve: {
    extensions: ['','.webpack.js','.web.js','.ts','.tsx','.js']
  },

  module : {
    loaders : [
      {
        test : /\.tsx?/,
        include : APP_DIR,
        loader : 'babel!ts-loader'
      },
      {
        test : /\.jsx?/,
        include : APP_DIR,
        loader : 'babel'
      }
    ]
  },

  externals: {
    'react': 'React',
    'react-dom': 'ReactDOM',
    'redux': 'Redux',
    'react-redux': 'ReactRedux'
  },

  devServer: {
    contentBase: "./src/client/",
    publicPath: "/public/"
  },
};

module.exports = config;