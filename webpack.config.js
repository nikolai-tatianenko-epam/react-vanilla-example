const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = function(_env, argv) {
  const isProduction = argv.mode === 'production';
  const isDevelopment = !isProduction;

  return {
    devtool: isDevelopment && 'cheap-module-source-map',
    entry: {
      // index: './src/index.js',
      app: {import: './src/App.js', filename: 'pages/[name]/[name].js'},
      // shared: ['react', 'react-dom'],
      home: {
        import: './src/pages/HomePage.jsx',
        filename: 'pages/[name]/[name].js',
      },
      about: {
        import: './src/pages/AboutPage.jsx',
        filename: 'pages/[name]/[name].js',
      },
    },
    output: {
      path: path.join(__dirname, '/dist'), // the bundle output path
      filename: 'bundle.js', // the name of the bundle
      // filename: 'assets/js/[name].[contenthash:8].js',
      // publicPath: '/',
    },
    plugins: [
      //new HtmlWebpackPlugin({template: 'src/index.html'}),
      new HtmlWebpackPlugin({
        template: 'src/index.html',
        filename: 'pages/app/index.html',
        chunks: ['app'],
      }),
      new HtmlWebpackPlugin({
        template: 'src/index.html',
        filename: 'pages/home/index.html',
        chunks: ['home'],
      }),
      new HtmlWebpackPlugin({
        template: 'src/index.html',
        filename: 'pages/about/index.html',
        chunks: ['about'],
      }),
      isProduction &&
      new MiniCssExtractPlugin({
        filename: 'pages/[name]/[name][contenthash:8].css',
        chunkFilename: 'pages/[name]/[name][contenthash:8].chunk.css',
      }),
    ].filter(Boolean),
    devServer: {
      port: 3030, // you can change the port
    },
    resolve: {
      extensions: ['.js', '.jsx'],
    },
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/, // .js and .jsx files
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
            options: {
              cacheDirectory: true,
              cacheCompression: false,
              envName: isProduction ? 'production' : 'development',
            },
          },
        },
        {

          test: /\.(png|woff|woff2|eot|ttf|svg)$/, // to import images and fonts
          loader: 'url-loader',
          options: {limit: false},
        },
        {
          test: /\.(png|jpg|gif)$/i,
          use: {
            loader: 'url-loader',
            options: {
              limit: 8192,
              name: 'static/media/[name].[hash:8].[ext]',
            },
          },
        },
        {
          test: /\.(sa|sc|c)ss$/, // styles files
          use: [
            isProduction ? MiniCssExtractPlugin.loader : 'style-loader',
            'css-loader',
            'sass-loader'],
        },

      ],
    },
  };
};
