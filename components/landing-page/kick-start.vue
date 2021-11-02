<template>
	<main class="pt-16 px-8">
		<h1
			class="
				text-center text-h5 text-sm-h4 text-md-h3
				font-weight-bold
				primary--text
			"
		>
			{{ $t('kickStart.title') }}
		</h1>
		<h2
			class="text-center text-h6 text-sm-h5 mb-4 text-md-h4 info--text mt-sm-4"
		>
			{{ $t('kickStart.text') }}
		</h2>
		<section
			class="d-flex flex-column mt-2 align-center mx-auto"
			style="max-width: 700px"
		>
			<div v-for="card in cards" :key="card.title">
				<info-card :card="card" :elevation="12"></info-card>
			</div>
			<div class="mt-4">
				<apply-now-button
					:buttonWidth="'200px'"
					:buttonColor="'#1D4283'"
					:buttonPadding="'36px 30px'"
					:buttonText="$i18n.locale === 'ar' ? 'قدّم الآن' : 'Apply Now'"
				></apply-now-button>
			</div>
		</section>
	</main>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class extends Vue {
	get cards() {
		return this.$t('kickStart.cards');
	}
}
</script>

<style scoped>
@media (max-width: 488px) {
	.cards {
		flex-direction: column;
	}
	.img {
		margin-right: 0 !important;
		margin-bottom: 10px;
	}
}
/* .hero {
	background: url(/raedah-bg.svg) no-repeat left center;
} */
</style>
