import Vue from 'vue';
import { ValidationProvider, ValidationObserver, extend } from 'vee-validate';
import { required, digits, email, max, regex } from 'vee-validate/dist/rules';

// 全てのルールを利用

extend('digits', {
	...digits,
	message: '{_field_} needs to be {length} digits. ({_value_})',
});

extend('required', {
	...required,
	message: '{_field_} can not be empty',
});

extend('max', {
	...max,
	message: '{_field_} may not be greater than {length} characters',
});

extend('regex', {
	...regex,
	message: '{_field_} {_value_} does not match {regex}',
});

extend('email', {
	...email,
	message: 'Email must be valid',
});
// setInteractionMode('lazy');

Vue.component('ValidationProvider', ValidationProvider);
Vue.component('ValidationObserver', ValidationObserver);
