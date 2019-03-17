const webpackMerge = require('webpack-merge')


module.exports = env => {
	const {presets}  = env
	const allConfigs =
		      [].concat(...[presets]) // flattening technique
		      .map(name =>
			      require(`./presets/webpack.${name}`)(env)
		      )

	return webpackMerge({}, ...allConfigs)
}
