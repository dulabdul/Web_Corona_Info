/* eslint-disable global-require */
/* eslint-disable import/no-extraneous-dependencies */
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const WebpackPwaManifest = require('webpack-pwa-manifest');
const WorkboxPlugin = require('workbox-webpack-plugin');
const ImageminWebpackPlugin = require('imagemin-webpack-plugin').default;
const ImageminMozjpeg = require('imagemin-mozjpeg');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const path = require('path');

module.exports = {
  entry: path.resolve(__dirname, 'src/scripts/index.js'),
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].bundle.js',
  },
  optimization: {
   splitChunks: {
     chunks: 'all',
     minSize: 20000,
     maxSize: 70000,
     minChunks: 1,
     maxAsyncRequests: 30,
     maxInitialRequests: 30,
     automaticNameDelimiter: '~',
     enforceSizeThreshold: 50000,
     cacheGroups: {
       defaultVendors: {
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
 module: {
  rules: [
      // bootstrap configure
      // ...
      {
        test: /\.(scss)$/,
        use: [
        {
            // inject CSS to page
            loader: 'style-loader',
          },
          {
            // translates CSS into CommonJS modules
            loader: 'css-loader',
          },
          {
            // Run postcss actions
            loader: 'postcss-loader',
            options: {
              // `postcssOptions` is needed for postcss 8.x;
              // if you use postcss 7.x skip the key
              postcssOptions: {
                // postcss plugins, can be exported to postcss.config.js
                plugins() {
                  return [require('autoprefixer')];
                },
              },
            },
          },
          {
            // compiles Sass to CSS
            loader: 'sass-loader',
          },
          ],
        },
        {
          test: /\.css$/,
          use: ['style-loader', 'css-loader'],
        },
        {
          test: /\.(png|jpe?g|gif)$/i,
          use: [
          {
            loader: 'file-loader',
          },
          ],
        },
        ],
      },
      plugins: [
      new WebpackPwaManifest({
        filename: 'manifest.json',
        name: 'Website Covid',
        display: 'standalone',
        start_url: '/index.html',
        short_name: 'Website Covid',
        description: 'Website Covid Indonesia',
        background_color: '#fff',
        theme_color: '#c1121f',
        crossorigin: null,
        inject: true,
        fingerprints: false,
        ios: true,
        publicPath: null,
        includeDirectory: true,
        icons: [
        {
          src: path.resolve('src/public/icons/icon.png'),
          sizes: [72, 96, 128, 192, 384, 512],
          purpose: 'any maskable',
          destination: path.join('icons'),
        },
        ],
      }),
      new HtmlWebpackPlugin({
        template: path.resolve(__dirname, 'src/templates/index.html'),
        filename: 'index.html',
      }),
      new CopyWebpackPlugin({
        patterns: [
        {
          from: path.resolve(__dirname, 'src/public/'),
          to: path.resolve(__dirname, 'dist/'),
          globOptions: {
           ignore: ['**/images/**'], // CopyWebpackPlugin mengabaikan berkas yang berada di dalam folder images
         },
       },
       ],
     }),
      new BundleAnalyzerPlugin(),
      new WorkboxPlugin.InjectManifest({
        swSrc: './src/scripts/sw.js',
        swDest: 'sw.js',
      }),
      new ImageminWebpackPlugin({
        plugins: [
        ImageminMozjpeg({
          quality: 50,
          progressive: true,
        }),
        ],  
      }),
      ],
    };
