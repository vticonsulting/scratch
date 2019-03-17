const { join, resolve } = require('path')
const { VueLoaderPlugin } = require('vue-loader')

module.exports = {
  components: '../src/components/**/[A-Z]*.vue',
  renderRootJsx: resolve(__dirname, 'styleguide.root.js'),
  require: [
    join(__dirname, '../src/static/system.css')
  ],
  webpackConfig: {
    module: {
      rules: [
        {
          test: /\.vue$/,
          loader: 'vue-loader'
        },
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
            options: require('../babel.config')
          }
        },
        {
          test: /\.css$/,
          use: ['vue-style-loader', 'css-loader']
        }
      ]
    },
    plugins: [new VueLoaderPlugin()]
  },
  usageMode: 'expand'
}
