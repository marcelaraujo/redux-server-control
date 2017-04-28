'use strict'
const path = require('path')
let name = 'Contragent'
let demoPath = '/contragent'

module.exports = {
	port: 3000,
	title: name,
	publicPath: process.env.BUILD_DEMO ? demoPath : '/',
	srcPath: path.join(__dirname, './../common'),
	// add these dependencies to a standalone vendor bundle
	vendor: [
		'react',
		'react-dom',
		'react-router',
		'redux',
		'react-router-redux',
		'redux-thunk',
		'semantic-ui-react',
		'whatwg-fetch',
		'semantic-ui-css/semantic.css',
		'prop-types'
	],
	// your web app's manifest.json
	manifest: {
		name: name,
		short_name: name,
		description: name,
		icons: [
			{
				src: 'images/touch/icon-128x128.png',
				sizes: '128x128',
				type: 'image/png'
			},
			{
				src: 'images/touch/apple-touch-icon.png',
				sizes: '152x152',
				type: 'image/png'
			},
			{
				src: 'images/touch/ms-touch-icon-144x144-precomposed.png',
				sizes: '144x144',
				type: 'image/png'
			},
			{
				src: 'images/touch/chrome-touch-icon-192x192.png',
				sizes: '192x192',
				type: 'image/png'
			}
		],
		start_url: '.',
		display: 'standalone',
		background_color: '#f7f7f7',
		theme_color: '#1b1c1d'
	}
}
