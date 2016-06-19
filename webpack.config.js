var webpack = require('webpack');
var path = require('path');

var BUILD_DIR = path.resolve(__dirname, 'src/client/public');
var APP_DIR = path.resolve(__dirname, 'src/components');

var config = {
  entry: APP_DIR + '/index.jsx',
  output: {
    path: BUILD_DIR,
    filename: 'bundle.js',
    libraryTarget: 'var',
    library: 'ReactRenderer'
  },
  devtool: 'source-map',
  // devtool: 'inline-source-map',
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
    //hot: true,
    //quiet: false,
    //noInfo: false,
    publicPath: "/public/"
  },

  //plugins: [
  //  new CommonsChunkPlugin({
  //    name: "vendor",
  //    minChunks: Infinity
//  })
  //]

  //plugins: [
  //  new webpack.IgnorePlugin(/react/)
  //]

  //alias: {
  //  "react": "react/addons"
  //}
};

module.exports = config;