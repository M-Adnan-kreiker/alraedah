import { NuxtOptionsHead } from '@nuxt/types/config/head';
// Global page headers: https://go.nuxtjs.dev/config-head

export default {
	titleTemplate: '',
	title: 'Alraedah',
	htmlAttrs: {
		lang: 'en',
	},
	link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
	meta: [
		{ charset: 'utf-8' },
		{ name: 'viewport', content: 'width=device-width, initial-scale=1' },
		{
			hid: 'description',
			name: 'description',
			content: 'Get the Financing Your Business Needs with Alraedah',
		},
		{ name: 'format-detection', content: 'telephone=no' },

		// Twitter
		// Test on: https://cards-dev.twitter.com/validator
		{
			hid: 'twitter:card',
			name: 'twitter:card',
			content: 'summary_large_image',
		},
		{ hid: 'twitter:site', name: 'twitter:site', content: 'Alraedah Finance' },
		{
			hid: 'twitter:url',
			name: 'twitter:url',
			content: process.env.BASE_URL,
		},
		{
			hid: 'twitter:title',
			name: 'twitter:title',
			content: 'Alraedah',
		},
		{
			hid: 'twitter:description',
			name: 'twitter:description',
			content: 'Get the Financing Your Business Needs with Alraedah',
		},
		{
			hid: 'twitter:image',
			name: 'twitter:image',
			content: 'https://nuxtjs.org/nuxt-card.png',
		},

		// Open Graph
		// Test on: https://developers.facebook.com/tools/debug/
		{
			hid: 'og:site_name',
			property: 'og:site_name',
			content: 'Alraedah',
		},
		{ hid: 'og:type', property: 'og:type', content: 'website' },
		{
			hid: 'og:url',
			property: 'og:url',
			content: process.env.BASE_URL,
		},
		{
			hid: 'og:title',
			property: 'og:title',
			content: 'Alraedah',
		},
		{
			hid: 'og:description',
			property: 'og:description',
			content: 'Get the Financing Your Business Needs with Alraedah',
		},
		{
			hid: 'og:image',
			property: 'og:image',
			content: 'https://nuxtjs.org/nuxt-card.png',
		},
		{
			hid: 'og:image:secure_url',
			property: 'og:image:secure_url',
			content: 'https://nuxtjs.org/nuxt-card.png',
		},
		{
			hid: 'og:image:alt',
			property: 'og:image:alt',
			content: 'Alraedah',
		},
	],
} as NuxtOptionsHead;
