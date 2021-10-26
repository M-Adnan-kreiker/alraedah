<template>
	<main class="mt-10">
		<landing-page class="mb-8 mb-sm-0"></landing-page>
		<achievements></achievements>
		<financing-solutions-page class="my-sm-8"></financing-solutions-page>
		<pricing-table class="mt-sm-16"></pricing-table>
		<partners class="mb-sm-16"></partners>
		<kick-start class="my-sm-16"></kick-start>
	</main>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
@Component
export default class extends Vue {
	created() {
		this.$router.push({
			path: this.$route.path,
			query: { source: 'Facebook' },
		});
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
