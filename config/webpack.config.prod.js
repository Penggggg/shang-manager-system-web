var webpack = require('webpack');
var helper = require('./helper.js');

var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var OpenBrowserPlugin = require('open-browser-webpack-plugin');

var ENV = process.env.NODE_ENV = process.env.ENV = 'production';

module.exports = {
	devtool: 'source-map',

	entry: {
	    'polyfills': './app/polyfills.ts',
	    'vendor': './app/vendor.ts',
	    'app': './app/main.ts'
	},

	output: {
	    path: helper.root('dist'),
	    publicPath: '/',
	    filename: '[name].[hash].js',
	    chunkFilename: '[id].[hash].chunk.js'
	},

	resolve: {
	    extensions: ['', '.js', '.ts']
	},

	htmlLoader: {
	    minimize: false // workaround for ng2
	},

	module: {
	    loaders: [
	      {
	        test: /\.ts$/,
	        loaders: ['awesome-typescript-loader', 'angular2-template-loader']
	      },
	      {
	        test: /\.html$/,
	        loader: 'html'
	      },
	      {
	        test: /\.(png|jpe?g|gif|svg|woff|woff2|ttf|eot|ico)$/,
	        loader: 'file?name=assets/[name].[hash].[ext]'
	      },
	      {
	        test: /\.css$/,
	        exclude: helper.root('app'),
	        loader: ExtractTextPlugin.extract('style', 'css?sourceMap')
	      },
	      {
	        test: /\.css$/,
	        include: helper.root('app'),
	        loader: 'raw'
	      },
	      {
	        test: /\.less$/,
	        loader: "style!css!less"
	      }
	    ]
	},

	plugins: [
	    new webpack.optimize.CommonsChunkPlugin({
	      name: ['app', 'vendor', 'polyfills']
	    }),

	    new HtmlWebpackPlugin({
	      template: 'app/index.html'
	    }),

	    new webpack.NoErrorsPlugin(),
	    new webpack.optimize.DedupePlugin(),
	    new webpack.optimize.UglifyJsPlugin({ // https://github.com/angular/angular/issues/10618
	      mangle: {
	        keep_fnames: true
	      }
	    }),
	    new webpack.DefinePlugin({
	      'process.env': {
	        'ENV':  JSON.stringify(ENV)
	      }
	    })
    ],

    devServer: {
	    historyApiFallback: true,
	    stats: 'minimal'
	}

};