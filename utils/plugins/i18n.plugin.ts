import { Plugin } from '@nuxt/types';
import VeeValidate, { localize } from 'vee-validate';
import en from 'vee-validate/dist/locale/en.json';
import ar from 'vee-validate/dist/locale/ar.json';

const i18n: Plugin = (ctx) => {
	const { app, $vuetify } = ctx;
	/**
	 *  onBeforeLanguageSwitch called right before setting a new locale
	 * @param oldLocale
	 * @param newLocale
	 */
	localize('en', en);
	localize('ar', ar);
	localize(app.i18n.locale);
	app.i18n.onBeforeLanguageSwitch = (oldLocale, newLocale) => {
		localize(newLocale);
		/**
		 * It is possible to access vuetify's plugin here because it is loaded before i18n's plugin.
		 * This is the reason for why i18n is inaccessable in vuetify's options.
		 */
		$vuetify.rtl = newLocale === 'ar';
	};
};

export default i18n;
