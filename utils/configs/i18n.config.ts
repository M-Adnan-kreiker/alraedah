import { Options } from 'nuxt-i18n/types';

// https://i18n.nuxtjs.org/options-reference
export default {
	baseUrl: process.env.BASE_URL,
	// skipSettingLocaleOnNavigate: true,
	langDir: '~/utils/locales/',
	// strategy: 'no_prefix',
	defaultLocale: 'en',
	locales: [
		{
			code: 'en',
			iso: 'en-US',
			name: 'English',
			file: 'en-US.js',
		},
		{
			code: 'ar',
			iso: 'ar-SA',
			name: 'عربى',
			file: 'ar-SA.js',
		},
	],

	/**
	 * All options are valid from vuei18n
	 */
	vueI18n: { fallbackLocale: ['en', 'ar'] },
	detectBrowserLanguage: false,
	lazy: true,

	// it conflicts with vuex-module-decorators, hence disabled.

	// TODO:
	vuex: false,
} as Options;
