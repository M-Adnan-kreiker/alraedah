import Vue from 'vue';

import {
	ValidationProvider,
	ValidationObserver,
	extend,
	setInteractionMode,
} from 'vee-validate';
import { required, digits, email, max, regex } from 'vee-validate/dist/rules';

extend('required', required);
extend('digits', digits);
extend('email', email);
extend('max', max);
extend('regex', regex);

setInteractionMode('eager');

Vue.component('ValidationProvider', ValidationProvider);
Vue.component('ValidationObserver', ValidationObserver);
