import resolve from 'rollup-plugin-includepaths'
import buble from 'rollup-plugin-buble'
import eslint from 'rollup-plugin-eslint'
import uglify from 'rollup-plugin-uglify'

const plugins = [ resolve({
	include: {
		container: 'src/interfaces/container'
		, optims: 'node_modules/fp/src/utils/optims/index'
		, symbols: 'node_modules/fp/src/utils/symbols'
	}
	, paths: ['src', 'node_modules/fp/src']
}), eslint(), buble() ]

if (process.env.build === 'min')
	plugins.push(uglify())

export default {
	format: 'umd'
	, entry: process.env.npm_package_module
	, dest: process.env.npm_package_main
	, moduleName: 'fp'
	, moduleId: process.env.npm_package_name
	, banner: `/**
 * ${process.env.npm_package_name} ${process.env.npm_package_version} – ${process.env.npm_package_description}
 * Made with ♫·♪ & -♥- by ${process.env.npm_package_author_name} <${process.env.npm_package_author_email}>
 * Published under ${process.env.npm_package_license} License
 */`
	, sourceMap: true
	, noConflict: true
	, plugins: plugins
}
