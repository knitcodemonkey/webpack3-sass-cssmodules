var ExtractTextPlugin = require('extract-text-webpack-plugin'),
    HtmlWebpackPlugin = require('html-webpack-plugin');
    BrowserSyncPlugin = require('browser-sync-webpack-plugin'),
    path = require('path');

module.exports = {
    entry: {
      index: './src/index',
    },
    output: {
        path: path.resolve(__dirname, './build'),
        filename: '[name].js',
        libraryTarget: 'umd',
        publicPath: '/'
    },
    module: {
        rules: [
          {
            test: /\.js$/,
            loader: 'babel-loader',
            exclude: /node_modules/
          },
          {
            test: /\.(scss|css)$/,
            exclude: /node_modules/,
            use: ExtractTextPlugin.extract({
              fallback: 'style-loader',
              use: [
                {
                  loader: require.resolve('css-loader'),
                  options: {
                    modules: true,
                    outputStyle: 'compressed',
                    sourceMap: false,
                    importLoaders: 2,
                    localIdentName: '[name]__[local]___[hash:base64:5]',
                  }
                },
                {
                  loader: require.resolve('sass-loader'),
                  options: {
                    outputStyle: 'compressed',
                    sourceMap: false
                  }
                },
              ],
            }),
          },
        ],
    },
    plugins: [

      new ExtractTextPlugin({
        filename:  (getPath) => {
          return getPath('css/[name].css').replace('css/js', 'css');
        },
        allChunks: true
      }),

      new HtmlWebpackPlugin({
        template: 'index.html',
        inject: true,
      }),

      new BrowserSyncPlugin({
          host: 'localhost',
          port: 3000,
          proxy: 'http://localhost:8080/'
      })
    ]
};
