const path = require('path')
const webpack = require('webpack')

const pathConfig = {
  root: __dirname,
  dist: path.resolve(__dirname, './dist')
}

module.exports = {
  target: 'web',
  mode: 'production',
  entry: {
    H5Player: [path.join(__dirname, 'lib/index.js')]
  },
  output: {
    filename: '[name].js',
    path: pathConfig.dist,
    publicPath: '/',
    library: '[name]',
    libraryTarget: 'window'
  },
  resolve: {
    alias: {},
    extensions: ['.js', '.jsx', '.json']
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: [['@babel/preset-env']]
            }
          }
        ]
      },
      {
        test: /\.scss$/,
        use: ['css-loader', 'style-loader', 'sass-loader']
      },
      {
        test: /\.(png|jpe?g|gif|svg|woff2?|eot|ttf|otf)(\?.*)?$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 10000,
              name: 'images/[name].[ext]'
            }
          }
        ]
      },
      {
        test: /\.css$/,
        use: [
          // MiniCssExtractPlugin.loader,
          'style-loader',
          'css-loader'
        ]
      }
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.VUE_ENV': '"client"',
      'process.env.buildTime': JSON.stringify(Date.now())
    }),
    new webpack.EnvironmentPlugin({ NODE_ENV: 'development' }),
    new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/),
    new webpack.optimize.ModuleConcatenationPlugin(),

    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    new webpack.NamedModulesPlugin()
  ],
  devServer: {
    host: 'local.sa.sogou.com',
    contentBase: pathConfig.root,
    compress: true,
    port: 8423,
    hot: true,
    inline: true
  }
}
