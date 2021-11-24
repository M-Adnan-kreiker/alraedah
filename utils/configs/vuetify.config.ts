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
				light: {
					primary: '#1e4382',
					accent: '#5f6369',
					secondary: '#4c83bd',
					info: '#5f6369',
					warning: '#fbc115',
					error: colors.deepOrange.accent4,
					success: colors.green.accent3,
				},
			},
		},
	} as Framework;
};
