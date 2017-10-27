const path = require('path');
var webpack = require('webpack');

const DIST_DIR = path.resolve(__dirname, 'dist');
const SRC_DIR = path.resolve(__dirname, 'src');
const config = {
	entry: SRC_DIR + '/index.js',
	output: {
		path: DIST_DIR + '/app',
		filename: 'bundle.js',
		publicPath: '/app/'
	},
	module: {
		loaders: [
			{
				test: /\.js?/,
				include: SRC_DIR,
				loader: 'babel-loader',
				query: {
					presets: ['react', 'es2015', 'stage-2']
				}
			},
			{
				test: /\.css$/,
				loader: 'style-loader!css-loader!autoprefixer-loader'
			},
			{
				test: /\.scss$/,
				loader: 'style-loader!css-loader!autoprefixer-loader!sass-loader'
			}
		]
	}
};

module.exports = config;