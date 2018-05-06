var webpack = require('webpack');
var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	//entry: './src/App.jsx',
	entry: {
		app: './src/App.jsx',
		vendor: ['react','react-dom','whatwg-fetch'],
	},
	output: {
		path: path.join(__dirname, '/build'),
		filename: 'app.bundle.js'
	},
	plugins: [
		new webpack.optimize.CommonsChunkPlugin({name:'vendor',filename:'vendor.bundle.js'}),
		new HtmlWebpackPlugin({
            hash: true,
            title: 'My Awesome application',
            myPageHeader: 'Hello World',
            template: './src/index.html',
            //filename: './build/index.html' //relative to root of the application
        })
	],
	module: {
		loaders: [
			{
				test: /\.jsx$/,
				loader: 'babel-loader',
				query: {
					presets: ['react','es2015']
				}
			},
		]
	},
	devServer: {
		port: 8000,
		contentBase: 'public',
		proxy: {
			'/api/*': {
				target: 'http://localhost:3000'
			}
		}
	}
};