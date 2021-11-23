import authConfig from './utils/configs/auth.config';
import axiosConfig from './utils/configs/axios.config';
import firebaseConfig from './utils/configs/firebase.config';
import headConfig from './utils/configs/head.config';
import i18nConfig from './utils/configs/i18n.config';
import robotsConfig from './utils/configs/robots.config';
// const MAIN_URL = 'https://alraedah-livid.vercel.app/'
import sitemapConfig from './utils/configs/sitemap.config';
require('dotenv').config();

export default {
	// Global page headers: https://go.nuxtjs.dev/config-head
	head: headConfig,

	generate: {
		dir: 'dist',
	},

	target: 'static',

	// Global CSS: https://go.nuxtjs.dev/config-css
	css: ['~/assets/main.scss'],

	// Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
	// !!! Always use object syntax for adding in plugins !!!
	plugins: [
		{ src: '~/utils/plugins/i18n.plugin.ts' },
		{ src: '~/utils/plugins/axios.plugin.ts' },
		{ src: '~/utils/plugins/auth.plugin.ts' },
		{ src: '~/utils/plugins/openreplay.plugin.ts' },
		{ src: '~/utils/plugins/veeValidate.plugin.client.ts', mode: 'client' },
	],

	extendPlugins(plugins: { src: string }[]) {
		/**
		 * The auth module's plugin is loaded as the last plugin,
		 * even after the custom plugin.
		 * Hence, Load the custom auth plugin at the end so that $auth can be accessable.
		 */
		const pluginIndex = plugins.findIndex(
			({ src }) => src === '~/utils/plugins/auth.plugin.ts'
		);
		const shouldBeLastPlugin = plugins[pluginIndex];

		plugins.splice(pluginIndex, 1);
		plugins.push(shouldBeLastPlugin);

		return plugins;
	},

	// Auto import components: https://go.nuxtjs.dev/config-components
	components: {
		components: true,
		dirs: ['~/components', '~/components/landing-page'],
	},

	// Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
	buildModules: [
		// https://go.nuxtjs.dev/typescript
		'@nuxt/typescript-build',
		// https://go.nuxtjs.dev/vuetify
		'@nuxtjs/vuetify',
	],

	// Modules: https://go.nuxtjs.dev/config-modules
	modules: [
		// https://go.nuxtjs.dev/axios
		'@nuxtjs/axios',
		// https://i18n.nuxtjs.org/
		'nuxt-i18n',
		// https://auth.nuxtjs.org/
		'@nuxtjs/auth-next',
		// https://firebase.nuxtjs.org/
		'@nuxtjs/firebase',
		// https://sitemap.nuxtjs.org/
		// https://github.com/nuxt-community/robots-module
		'@nuxtjs/robots',
		'@nuxtjs/dotenv',
		'nuxt-speedkit',
		'@nuxtjs/sitemap',

	],

	// Axios module configuration: https://go.nuxtjs.dev/config-axios
	axios: axiosConfig,

	// https://i18n.nuxtjs.org/options-reference
	i18n: i18nConfig,

	// https://auth.nuxtjs.org/api/options
	auth: authConfig,

	// Vuetify module configuration: https://go.nuxtjs.dev/config-vuetify
	vuetify: {
		customVariables: ['~/assets/variables.scss'],
		optionsPath: '~/utils/configs/vuetify.config.ts',
		treeShake: true,
		// defaultAssets: { font: false, icons: true },
	},

	env: {
		EP: process.env.EP,
	},

	sitemap: sitemapConfig,

	firebase: firebaseConfig,

	robots: robotsConfig,

	speedkit: {
		 detection: {
      performance: true,
      browserSupport: true
    },
    performanceMetrics: {
      device: {
        hardwareConcurrency: { min: 2, max: 48 },
        deviceMemory: { min: 2 }
      },
      timing: {
        fcp: 800,
        dcl: 1200
      },
      lighthouseDetectionByUserAgent: false
    },

				 fonts: [{
      family: 'Aktiv Grotesk',
      locals: ['Aktiv Grotesk'],
      fallback: ['sans-serif'],
      variances: [
        {
          style: 'normal',
          weight: 500,
          sources: [
            { src: '@/assets/fonts/AktivGrotesk-Regular.woff', type:'woff' },
          ]
        },  {
          style: 'normal',
          weight: 700,
          sources: [
            { src: '@/assets/fonts/AktivGrotesk-Bold.woff', type:'woff' },
          ]
        }
      ]
    }],

    componentAutoImport: false,
    componentPrefix: undefined,

    /**
     * IntersectionObserver rootMargin for Compoennts and Assets
     */
    lazyOffset: {
      component: '0%',
      asset: '0%'
    }
	},

	// Build Configuration: https://go.nuxtjs.dev/config-build
	build: {},
	loading: {
		color: '#4B82BC',
		height: '3px',
	},

	router: {
		scrollBehavior: function (to: any, from: any, savedPosition: any) {
			let position = false;

			// if no children detected
			if (to.matched.length < 2) {
				// scroll to the top of the page
				//	@ts-ignore

				position = { x: 0, y: 0 };
			} else if (
				to.matched.some((r: any) => r.components.default.options.scrollToTop)
			) {
				// if one of the children has scrollToTop option set to true
				//	@ts-ignore
				position = { x: 0, y: 0 };
			}

			// savedPosition is only available for popstate navigations (back button)
			if (savedPosition) {
				position = savedPosition;
			}

			return new Promise((resolve) => {
				// wait for the out transition to complete (if necessary)
				window.$nuxt.$once('triggerScroll', () => {
					// coords will be used if no selector is provided,
					// or if the selector didn't match any element.
					if (to.hash) {
						let hash = to.hash;
						// CSS.escape() is not supported with IE and Edge.
						if (
							typeof window.CSS !== 'undefined' &&
							typeof window.CSS.escape !== 'undefined'
						) {
							hash = '#' + window.CSS.escape(hash.substr(1));
						}
						try {
							if (document.querySelector(hash)) {
								// scroll to anchor by returning the selector
								//	@ts-ignore

								position = { selector: hash };
							}
						} catch (e) {
							// console.warn(
							// 	'Failed to save scroll position. Please add CSS.escape() polyfill (https://github.com/mathiasbynens/CSS.escape).'
							// );
						}
					}
					resolve(position);
				});
			});
		},
	},
};
