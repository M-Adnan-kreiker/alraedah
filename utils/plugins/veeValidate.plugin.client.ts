import { Context } from '@nuxt/types';
import Vue from 'vue';
import { configure } from 'vee-validate';
import {
	ValidationProvider,
	ValidationObserver,
	extend,
	setInteractionMode,
} from 'vee-validate';
import { required, digits, email, max, regex } from 'vee-validate/dist/rules';

import en from 'vee-validate/dist/locale/en.json';
import ar from 'vee-validate/dist/locale/ar.json';
import VueI18n from 'vue-i18n';
export default (ctx: Context) => {
	const i18n = new VueI18n({
		locale: ctx.app.i18n.locale,
		messages: {
			en: {
				validations: en,
			},
			ar: {
				validations: ar,
			},
		},
		/* `VueI18n` options... */
	});
	configure({
		// this will be used to generate messages.
		defaultMessage: (field: any, values: any) => {
			values._field_ = `${field}`;
			return i18n.t(`validations.messages.${values._rule_}`, values);
		},
	});
};

extend('required', required);
extend('digits', digits);
extend('email', email);
extend('max', max);
extend('regex', regex);

setInteractionMode('eager');

Vue.component('ValidationProvider', ValidationProvider);
Vue.component('ValidationObserver', ValidationObserver);
