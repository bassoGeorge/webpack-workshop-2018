const webpack           = require('webpack')
const HtmlWebpackPlugin = require("html-webpack-plugin")
const WebpackMerge      = require('webpack-merge')

const modeConfig   = env => require(`./build-utils/webpack.${env.mode}`)(env)
const presetConfig = require('./build-utils/load-presets')

module.exports = ({mode = 'production', presets = [], ...rest}) => {

	// env variable comes into the webpack function
	// env can be set on console using `--env.key value`

	const envWithDefaults = { mode, presets, ...rest }

	return WebpackMerge({
			mode,
			output : {
				// path defaults to ./dist
				filename: 'bundle.js'
			},
			module : {
				rules: [
					{
						test: /\.jpe?g$/,
						use : [{
							loader : 'url-loader',
							options: {
								limit: 5000
							}
						}]
					}
				]
			},
			plugins: [
				new HtmlWebpackPlugin(),
				new webpack.ProgressPlugin()
			]
		},
		modeConfig(envWithDefaults),
		presetConfig(envWithDefaults)
	)
}
