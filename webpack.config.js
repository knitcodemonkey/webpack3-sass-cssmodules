var ExtractTextPlugin = require('extract-text-webpack-plugin'),
    HtmlWebpackPlugin = require('html-webpack-plugin'),
    BrowserSyncPlugin = require('browser-sync-webpack-plugin'),
    path = require('path');

module.exports = {
  entry: {
    index: './src/Home',
    about: './src/About',
    talks: './src/Talks',
  },
  output: {
    path: path.resolve(__dirname, './example'),
    filename: 'js/[name].js',
    libraryTarget: 'umd',
    publicPath: './'
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
                minimize: false,
                sourceMap: false,
                importLoaders: 2,
                localIdentName: '[name]__[local]___[hash:base64:5]',
              }
            },
            {
              loader: require.resolve('sass-loader'),
              options: {
                minimize: false,
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
      filename: (getPath) => {
        return getPath('css/[name].css').replace('css/js', 'css');
      },
      allChunks: true
    }),
    new HtmlWebpackPlugin({  // Generate an index.html
      filename: 'index.html',
      template: 'src/templates/index.html',
      css: [ "index.css" ],
      chunks: ['index']
    }),
    new HtmlWebpackPlugin({  // Generate an about.html
      filename: 'about.html',
      template: 'src/templates/index.html',
      css: [ "about.css" ],
      chunks: ['about']
    }),
    new HtmlWebpackPlugin({  // Generate a talks.html
      filename: 'talks.html',
      template: 'src/templates/index.html',
      css: [ "talks.css" ],
      chunks: ['talks']
    }),
    new BrowserSyncPlugin({
      host: 'localhost',
      port: 3000,
      proxy: 'http://localhost:8080/'
    })
  ]
};
