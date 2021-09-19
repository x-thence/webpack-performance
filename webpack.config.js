const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const TerserPlugin = require('terser-webpack-plugin');

module.exports = {
  entry: {
    index: './src/index.js',
    // a: './src/a.js'
  },
  mode: 'production', // production
  output: {
    filename: '[name][contenthash:6].js',
    chunkFilename: 'chunk_[name].js',
    path: path.resolve(__dirname, 'dist')
  },
  optimization: {
    // chunkIds: 'deterministic',
    runtimeChunk: true, // 提升性能，当只有被改变的模块发生变更时只会重新打包那个文件，浏览器直接从缓存中加载
    minimizer: [
      new TerserPlugin({
        extractComments: false // 去除production模式下打包生成的lisence文件
      })
    ],
    // splitChunks: {
      // minSize: 50,
      // chunks: 'all',
      // cacheGroups: {
      //   common: {
      //     name: 'common',
      //     chunks: 'initial',
      //     minChunks: 1,
      //     priority: -20
      //   },
      //   vendor: {
      //     test: /[\\/]node_modules[\\/]/,
      //     name: 'vendor',
      //     chunks: 'initial',
      //     priority: -10
      //   }
      // }
    // }
  },
  plugins: [
    new HtmlWebpackPlugin(),
    new CleanWebpackPlugin()
  ]
}