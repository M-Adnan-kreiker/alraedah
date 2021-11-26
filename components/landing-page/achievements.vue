<template>
	<main
		class="pb-12"
		style="background: url(/Al-Riyad2.webp); background-size: cover"
	>
		<div class="mb-8 pt-10">
			<h1
				style="text-shadow: 2px 2px 5px gray"
				class="
					text-center
					font-weight-bold
					text-h5 text-sm-h4 text-md-h3 text-wrap
					white--text
					mx-4
				"
			>
				<!-- We Help You Grow Your Buisness -->
				{{ $t('achievements.title') }}
			</h1>
			<h2
				style="text-shadow: 2px 2px 5px gray"
				class="text-center pt-8 mx-4 text-h6 text-sm-h5 text-md-h3 white--text"
			>
				<!-- A Glimpse of Our Achievements -->
				{{ $t('achievements.text') }}
			</h2>
		</div>
		<v-row class="mx-4 pb-sm-12">
			<v-col
				v-for="card in cards"
				:key="card.text"
				class="text-center py-0"
				cols="12"
				sm="4"
			>
				<v-card
					class="py-sm-8 mx-auto card"
					max-height="200"
					color="transparent"
					flat
					width="100%"
					max-width="240"
				>
					<p
						style="text-shadow: 2px 2px 5px gray"
						class="text-h3 white--text card-text text-md-h1 font-weight-bold"
					>
						{{ card.number }}
					</p>
					<p
						style="
							letter-spacing: 1.5px !important;
							text-shadow: 2px 2px 5px gray;
						"
						class="text-body-1 text-sm-h6 text-uppercase white--text"
					>
						{{ card.text }}
					</p>
				</v-card>
			</v-col>
		</v-row>
	</main>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
@Component
export default class extends Vue {
	cards = [
		{
			text: this.$t('achievements.cases.projects'),
			number: 120,
		},
		{
			text: this.$t('achievements.cases.customers'),
			number: '180',
		},
		{
			text: this.$t('achievements.cases.cases'),
			number: '700',
		},
	];
}
</script>

<style scoped>
.card {
	/* background: rgba(16, 97, 191, 0.2); */
	box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.411);
	backdrop-filter: blur(1.5px);
	-webkit-backdrop-filter: blur(2px);
	border-radius: 10px;
	/* border: 1px solid rgba(255, 255, 255, 0.18); */
}
</style>
