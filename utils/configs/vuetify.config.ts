import { Context } from '@nuxt/types';
import { Framework } from 'vuetify/types';
import colors from 'vuetify/es5/util/colors';

export default (ctx: Context): Framework => {
	return {
		/**
		 * Using the route to specify RTL because i18n is not yet configured at this point of nuxt's lifecycle
		 */
		rtl: ctx.route.path.includes('/ar'),
		theme: {
			dark: false,
			themes: {
				dark: {
					primary: '#1D4283',
					accent: '#75787B',
					secondary: '#4B82BC',
					info: '#75787B',
					warning: colors.amber.base,
					error: colors.deepOrange.accent4,
					success: colors.green.accent3,
				},
				light: {
					primary: '#1D4283',
					accent: '#75787B',

					secondary: '#4B82BC',
					info: '#75787B',
					warning: colors.amber.base,
					error: colors.deepOrange.accent4,
					success: colors.green.accent3,
				},
			},
		},
	} as Framework;
};
