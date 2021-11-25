<template>
	<main class="pt-10">
		<social-head
			:title="$t('seo.home.title')"
			:description="$t('seo.home.description')"
		></social-head>
		<landing-page class="mb-4 mb-sm-0"></landing-page>
		<achievements />
		<v-lazy
			v-model="achievements"
			:options="{
				threshold: 0.5,
			}"
			min-height="200"
			transition="fade"
		>
			<financing-solutions-page class="my-sm-8"></financing-solutions-page>
		</v-lazy>

		<v-lazy
			v-model="pricingTable"
			:options="{
				threshold: 0.5,
			}"
			min-height="200"
			transition="fade"
		>
			<pricing-table class="mt-sm-16"></pricing-table>
		</v-lazy>
		<v-lazy
			v-model="partners"
			:options="{
				threshold: 0.5,
			}"
			min-height="200"
			transition="fade"
		>
			<partners></partners>
		</v-lazy>
		<v-lazy
			v-model="kickStart"
			:options="{
				threshold: 0.5,
			}"
			min-height="200"
			transition="fade"
		>
			<kick-start class="pb-8 pb-sm-16"></kick-start>
		</v-lazy>
	</main>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { NuxtOptionsHead } from '@nuxt/types/config/head';

@Component
export default class extends Vue {
	head(): NuxtOptionsHead {
		return {
			link: [
				{
					rel: 'subresource',
					as: 'image',
					href: '/banner2.webp',
				},
			],
		};
	}

	created() {
		if (this.$route.query.source) {
			this.$store.commit('modules/leads/setSource', this.$route.query.source);
		}
	}
	pricingTable = false;
	achievements = false;
	partners = false;
	kickStart = false;
}
</script>

<style>
.mdi-chevron-right::before,
.mdi-chevron-left::before {
	/* content: "\F0142"; */
	background: #4b82bc;
	border-radius: 50%;
	color: white;
	padding: 3px;
}
</style>
