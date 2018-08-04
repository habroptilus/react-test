module.exports = {
  mode: 'development',
  entry: './app.js',
  output: {
    path: __dirname + '/dist',
    filename: 'app.js'
  },
  module: {
    rules: [
      {
         test: /\.js$/,
         exclude: /node_modules/,
        loader: 'babel-loader'
      }
    ]
  }
}
