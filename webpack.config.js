const path = require('path');

const config = {
  entry: './app/main.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'all.js'
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules|bower_components/,
        use:{
          loader: "babel-loader",
          options: {
            presets: ['es2015','react']
          }
        } 
        
      }
    ]
  },
  watch:true
}

module.exports = config;