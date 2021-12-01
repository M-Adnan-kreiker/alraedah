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
			values._field_ = i18n.t(`${field}`);
			return i18n.t(`validations.messages.${values._rule_}`, values);
		},
	});
};

extend('required', required);
extend('digits', digits);
extend('email', email);
extend('max', max);
extend('regex', regex);

// configure({
// 	generateMessage: localize({
// 		en: {
// 			messages: {
// 				required: '{_field_} can not be empty',
// 				digits: '{_field_} needs to be {length} digits.',
// 				email: 'Email must be valid',
// 				max: '{_field_} may not be greater than {length} characters',
// 				regex: '{_field_} {_value_} does not match {regex}',
// 			},
// 		},
// 		ar: {
// 			messages: {
// 				required: '{_field_} لا يمكن ترك هذا الحقل فارغ',
// 				digits: 'يجب أن يكون {length} خانة {_field_}',
// 				email: 'الرجاء إدخال عنوان بريد إلكتروني صالح',
// 				max: 'يجب أن يكون أكثر من  {length} {_field_}',
// 				regex: 'الرجاء إدخال رقم صالح',
// 			},
// 		},
// 	}),
// });

setInteractionMode('eager');
// extend('digits', {
// 	...digits,
// 	message: '{_field_} needs to be {length} digits.',
// });

// extend('required', {
// 	...required,
// 	message: '{_field_} can not be empty',
// });

// extend('max', {
// 	...max,
// 	message: '{_field_} may not be greater than {length} characters',
// });

// extend('regex', {
// 	...regex,
// 	message: '{_field_} {_value_} does not match {regex}',
// });

// extend('email', {
// 	...email,
// 	message: 'Email must be valid',
// });

Vue.component('ValidationProvider', ValidationProvider);
Vue.component('ValidationObserver', ValidationObserver);
