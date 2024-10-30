const webpack = require('webpack')
require('dotenv').config()
const fs = require('fs');
const path = require('path');

module.exports = {
	telemetry: false,
	mode: 'universal',
	cache: true,
	parallel: true,

	/*
	** Headers of the page
	*/
	server: {
		port: process.env.SERVER_PORT,
		host: '0.0.0.0',
	},
	render: {
		static: {
			setHeaders(res) {
				res.setHeader('Cache-Control', 'max-age=3600')
			}
		}
	},
	head: {
		title: 'Aerokod',
		//titleTemplate: '%s - Nuxt.js',
		htmlAttrs: {
			lang: 'ru',
		},
		meta: [
			{charset: 'utf-8'},
			{name: 'viewport', content: 'width=device-width, initial-scale=1, user-scalable="no"'},
			{hid: 'description', name: 'description', content: ''}
		],
		link: [
			{rel: 'icon', type: 'image/svg', href: '/fav.svg', sizes: 'any'},
			{rel: 'preload', href: '/img/general/logo-white.svg', as: 'image'},
			{rel: 'preload', href: '/fonts/museo-sans-cyrl/museosanscyrl-100.woff2', as: 'font'},
			{rel: 'preload', href: '/fonts/museo-sans-cyrl/museosanscyrl-300.woff2', as: 'font'},
			{rel: 'preload', href: '/fonts/museo-sans-cyrl/museosanscyrl-500.woff2', as: 'font'},
			{rel: 'preload', href: '/fonts/noto-sans/notosans-regular.woff2', as: 'font'},
		]
	},
	/*
	** Customize the progress-bar color
	*/
	loading: {color: '#805151'},
	/*
	** Global CSS
	*/
	css: [],
	/*
	** Plugins to load before mounting the App
	*/

	/*
	** Nuxt.js dev-modules
	*/
	buildModules: [],
	/*
	** Nuxt.js modules
	*/
	modules: [
		// Doc: https://axios.nuxtjs.org/usage
		'@nuxtjs/axios',
		'@nuxtjs/style-resources',
		'@nuxtjs/svg-sprite',

		['nuxt-gmaps', {
			key: process.env.GOOGLE_MAP_KEY,
			//you can use libraries: ['places']
		}],
		"nuxt-compress",
		"@/modules/axCache",
		'nuxt-basic-auth-module',
		// [
		// 	'@nuxtjs/yandex-metrika',
		// 	{
		// 		id: process.env.YANDEX_METRIKA_ID,
		// 		webvisor: true,
		// 		clickmap:true,
		// 		useCDN:true,
		// 		trackLinks:true,
		// 		accurateTrackBounce:true,
		// 	}
		// ],
	],
	"nuxt-compress": {
		gzip: {
			cache: true
		},
		brotli: {
			threshold: 10240
		}
	},
	/*
	** Axios module configuration
	** See https://axios.nuxtjs.org/options
	*/
	axios: {
		baseURL: process.env.API_BASE,

	},
	styleResources: {

		scss: [
			'~assets/scss/global.scss',
		]
	},
	css: [
		'~assets/scss/index.scss',
	],
	svgSprite: {
		input: '~/static/img/svg/'
	},
	plugins: [
		'@/plugins/axios',
		'~/plugins/bootstrap-vue.js',
		'~/plugins/global-components.js',
		'~/plugins/templateHelpers.js',
		{
			src: '~/plugins/swiper.js',
			ssr: false
		},
		{
			src: '~/plugins/v-mask.js',
			ssr: false
		},
		{
			src: '~/plugins/vue-carousel-3d.js',
			ssr: false
		},
		{
			src: '~/plugins/vue-slider-component.js',
			ssr: false
		},
		{
			src: '~plugins/vue-scrollmagic.js',
			ssr: false
		},
		{
			src: '~plugins/lightgallery.client.js',
			ssr: false
		},
		{
			src: '~plugins/aos.js',
			ssr: false
		},
		{
			src: '~plugins/v-tooltip.js',
			ssr: false
		}
	],
	/*
	** Build configuration
	*/
	build: {
		/*
		** You can extend webpack config here
		*/
		//extractCSS: true,
		//cache: true,
		postcss: {
			plugins: {

			}
		},
		extend(config, ctx) {
		},

	},
	module: {
		rules: [
			{
				test: /\.js$/,
				use: ['cache-loader', 'babel-loader'],
			},
		],
	},

	transition: {
		name: 'page',
		mode: 'in-out'
	},
	basic: {
		name: process.env.BASIC_AUTH_USER,
		pass: process.env.BASIC_AUTH_PASS,
		enabled: process.env.BASIC_AUTH_ENABLED == 'true',
	},
	router: {

		extendRoutes(routes, resolve) {

		},

		async scrollBehavior(to, from, savedPosition) {
			console.log(555, to, from, savedPosition)
			if (savedPosition) {
				return savedPosition
			}
			const isChangeFilter = (from, to) => {
				const routeNames = ['apartments', 'slug', 'documents']
				return routeNames.includes(from.name) && routeNames.includes(to.name) &&
					from.name == to.name
			}
			if (isChangeFilter(from, to)) {
				return
			}
			const isChangeFloor = (from, to) => {
				const routeNames = ['apartments-id']
				return routeNames.includes(from.name) && routeNames.includes(to.name)
			}
			if (isChangeFloor(from, to)) {
				return
			}
			return window.scrollTo({ top: 0, behavior: 'auto' })
		}
	}
}
