var webpack = require('webpack');
var path = require('path');

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
		new webpack.optimize.CommonsChunkPlugin({name:'vendor',filename:'vendor.bundle.js'})
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