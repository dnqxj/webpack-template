const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  mode: 'development',
  entry: './src/main.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: 'babel-loader'
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, 'public/index.html')
    })
  ],
  resolve: {
    alias: {
      "@": path.join(__dirname, 'src'),
      "@img": path.join(__dirname, 'src/assets/images')
    }
  },
  devtool: "eval-source-map",
  devServer: {
    open: true,
    port: 8080
  }
}