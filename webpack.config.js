var ExtractTextPlugin = require('extract-text-webpack-plugin'),
    HtmlWebpackPlugin = require('html-webpack-plugin');
    BrowserSyncPlugin = require('browser-sync-webpack-plugin'),
    data = require('./data.js'),
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
            test: /\.css$/,
            exclude: /node_modules/,
            use: ExtractTextPlugin.extract({
              fallback: 'style-loader',

              // Could also be write as follow:
              // use: 'css-loader?modules&localIdentName=[name]__[local]___[hash:base64:5]!postcss-loader'
              use: [
                {
                  loader: 'css-loader',
                  query: {
                    modules: true,
                    localIdentName: '[name]__[local]___[hash:base64:5]'
                  }
                },
                'postcss-loader'
              ]
            }),
          },
          {
            test: /\.scss$/,
            exclude: /node_modules/,
            use: ExtractTextPlugin.extract({
              fallback: 'style-loader',

              // Could also be write as follow:
              // use: 'css-loader?modules&importLoader=2&sourceMap&localIdentName=[name]__[local]___[hash:base64:5]!sass-loader'
              use: [
                {
                  loader: 'css-loader',
                  query: {
                    modules: true,
                    sourceMap: true,
                    importLoaders: 2,
                    localIdentName: '[name]__[local]___[hash:base64:5]'
                  }
                },
                'sass-loader'
              ]
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
