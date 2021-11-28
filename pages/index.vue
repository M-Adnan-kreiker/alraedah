<template>
	<main class="pt-10">
		<social-head
			:title="$t('seo.home.title')"
			:description="$t('seo.home.description')"
		></social-head>
		<landing-page class="mb-4 mb-sm-0"></landing-page>
		<v-lazy
			v-model="achievements"
			:options="{
				threshold: 0.15,
			}"
			min-height="500"
			transition="fade"
		>
			<achievements />
		</v-lazy>
		<v-lazy
			v-model="solutions"
			:options="{
				threshold: 0.15,
			}"
			min-height="500"
			transition="fade"
		>
			<financing-solutions-page class="my-sm-8"></financing-solutions-page>
		</v-lazy>

		<v-lazy
			v-model="pricingTable"
			:options="{
				threshold: 0.15,
			}"
			min-height="500"
			transition="fade"
		>
			<pricing-table class="mt-sm-16"></pricing-table>
		</v-lazy>
		<v-lazy
			v-model="partners"
			:options="{
				threshold: 0.15,
			}"
			min-height="400"
			transition="fade"
		>
			<partners></partners>
		</v-lazy>
		<v-lazy
			v-model="kickStart"
			:options="{
				threshold: 0.15,
			}"
			min-height="400"
			transition="fade"
		>
			<kick-start class="pb-8 pb-sm-16"></kick-start>
		</v-lazy>
	</main>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class extends Vue {
	created() {
		if (this.$route.query.source) {
			this.$store.commit('modules/leads/setSource', this.$route.query.source);
		}
	}
	pricingTable = false;
	solutions = false;
	partners = false;
	kickStart = false;
	achievements = false;
}
</script>

<style></style>
