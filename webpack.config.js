const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
// 这是每次打包删除原dist目录
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

module.exports = {
  mode:  'development',
  entry: './src/main.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.scss$/,
        use: [
          "style-loader",
          "css-loader",
          "sass-loader"
        ]
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: path.join(__dirname, 'public/index.html')
    })
  ],
  // 优化
  optimization: {
    splitChunks: {  // 使用代码自动分隔
      chunks: 'all',
      minSize: 100000,
      maxSize: 300000,
      minChunks: 5,
      maxAsyncRequests: 5,
      maxInitialRequests: 3,
      automaticNameDelimiter: '~',
      name: false,
      cacheGroups: {
        vendors: {
          test: /[\\/]node_modules[\\/]/,
          priority: -10
        },
        default: {
          minChunks: 2,
          priority: -20,
          reuseExistingChunk: true
        }
      }
    }
  },
  resolve: {
    alias: {
      "@": path.join(__dirname, 'src'),
      "@img": path.join(__dirname, 'src/assets/images')
    }
  },
  // 外部扩展
  externals: {
    "react": 'React',
    "react-dom": "ReactDOM" 
  },
  devtool: "eval-source-map",
  devServer: {
    open: true,
    port: 8080
  }
}