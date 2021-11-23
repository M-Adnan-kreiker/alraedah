<template>
	<main class="pt-10">
		<social-head
			:title="$t('seo.home.title')"
			:description="$t('seo.home.description')"
		></social-head>
		<landing-page  class="mb-8 mb-sm-0"></landing-page>
		<Lazy-achievements />
		<Lazy-financing-solutions-page
			class="my-sm-8"
		></Lazy-financing-solutions-page>
		<Lazy-pricing-table class="mt-sm-16"></Lazy-pricing-table>
		<Lazy-partners></Lazy-partners>
		<Lazy-kick-start class="pb-8 pb-sm-16"></Lazy-kick-start>
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
