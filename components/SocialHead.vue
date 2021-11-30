<template>
	<span v-if="false" />
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'nuxt-property-decorator';

// Test on: https://cards-dev.twitter.com/validator
// Test on: https://developers.facebook.com/tools/debug/

@Component({ name: 'SocialHead' })
export default class extends Vue {
	@Prop({ required: true })
	title!: string;
	@Prop({ required: true })
	description!: string;
	@Prop({ default: '' })
	image!: string;

	head() {
		return {
			htmlAttrs: {
				lang: this.$i18n.locale,
			},
			title: this.title,
			meta: [
				{
					hid: 'description',
					name: 'description',
					content: this.description,
				},
				{
					hid: 'twitter:title',
					name: 'twitter:title',
					content: this.title,
				},
				{
					hid: 'twitter:description',
					name: 'twitter:description',
					content: this.description,
				},
				{
					hid: 'twitter:image',
					name: 'twitter:image',
					content:
						'https://media-exp1.licdn.com/dms/image/C4D0BAQGTixe0GA25-g/company-logo_200_200/0/1519899921853?e=1646265600&v=beta&t=12dFKzhF_zwlU0t_NpObOnMt0LK7idobK5WPzIFD4SE',
				},
				{
					hid: 'twitter:image:alt',
					name: 'twitter:image:alt',
					content: this.title,
				},
				{
					hid: 'og:title',
					property: 'og:title',
					content: this.title,
				},
				{
					hid: 'og:description',
					property: 'og:description',
					content: this.description,
				},
				{
					hid: 'og:image',
					property: 'og:image',
					content:
						'https://media-exp1.licdn.com/dms/image/C4D0BAQGTixe0GA25-g/company-logo_200_200/0/1519899921853?e=1646265600&v=beta&t=12dFKzhF_zwlU0t_NpObOnMt0LK7idobK5WPzIFD4SE',
				},
				{
					hid: 'og:image:secure_url',
					property: 'og:image:secure_url',
					content:
						'https://media-exp1.licdn.com/dms/image/C4D0BAQGTixe0GA25-g/company-logo_200_200/0/1519899921853?e=1646265600&v=beta&t=12dFKzhF_zwlU0t_NpObOnMt0LK7idobK5WPzIFD4SE',
				},
				{
					hid: 'og:image:alt',
					property: 'og:image:alt',
					content: this.title,
				},
			],
		};
	}
}
</script>
