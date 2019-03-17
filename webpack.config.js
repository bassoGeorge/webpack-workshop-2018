const webpack = require('webpack')
const HtmlWebpackPlugin = require("html-webpack-plugin")

module.exports = ({ mode }) => {

	// env variable comes into the webpack function
	// env can be set on console using `--env.key value`

	return {
		mode,
		output: {
			// path defaults to ./dist
			filename: 'bundle.js'
		},
		plugins: [
			new HtmlWebpackPlugin(),
			new webpack.ProgressPlugin()
		]
	}
}
