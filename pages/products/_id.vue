<template>
	<div v-if="myProduct" class="mx-4 mx-sm-8 mx-md-10 mx-lg-16 mt-16">
		<!-- <h1 class="primary--text mb-12 text-h3 font-weight-bold">
			{{ myProduct[0].name }}
		</h1> -->
		<v-sheet elevation="4" class="rounded-xl my-16">
			<product-card :products="myProduct"></product-card>
		</v-sheet>
		<h2 class="primary--text text-h4 font-weight-bold mb-8">
			{{ $t('chargesCalc') }}
		</h2>
		<div>
			<fees-info
				:fees="myProduct[0].fees"
				:moreInfo="myProduct[0].moreInfo"
			></fees-info>
		</div>
		<v-row class="mb-16">
			<v-col cols="12" md="7">
				<charts-card
					:min="min"
					:max="max"
					:slider="slider"
					:step="step"
				></charts-card>
			</v-col>
			<v-col cols="12" md="5" class="mt-4">
				<pricing-card class="mx-auto" :card="myProduct[0].card">
					<template v-slot:header>
						{{ myProduct[0].card.title }}
					</template>
					<template v-slot:content>
						<div class="d-flex flex-column">
							<div
								class="my-2 px-2 d-flex"
								v-for="(item, i) in myProduct[0].card.info"
								:key="i"
							>
								<img
									class="mx-4 d-block align-self-start pt-1 mr-sm-4"
									src="/checkMark.svg"
									alt=""
								/>
								<span class="text-h6 d-block font-weight-regular text-wrap">{{
									item
								}}</span>
							</div>
						</div>
					</template>
					<template v-slot:button>
						<apply-now-button
							:buttonTextColor="'#1D4283'"
							:buttonColor="'#ffffff'"
							:buttonText="$i18n.locale === 'ar' ? 'قدّم' : 'Apply'"
							:buttonPadding="'28px 80px'"
						></apply-now-button>
					</template>
				</pricing-card>
			</v-col>
		</v-row>
		<v-row>
			<v-col cols="12" md="6">
				<p class="black--text font-weight-bold mt-n8 ml-sm-8 mb-16">
					{{ myProduct[0].caveat }}
				</p>
			</v-col>
		</v-row>
	</div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class extends Vue {
	mounted() {
		console.log(this.$route.params);
	}
	products: any = this.$t('products');
	myProduct = this.products.filter(
		(el: any) => el.category === this.$route.params.id
	);
	step: number = this.myProduct[0].step;
	max: number = this.myProduct[0].max;
	min: number = this.myProduct[0].step;
	slider = this.myProduct[0].step;
	local: string = this.$i18n.locale;
	moneyFormatter(num: number) {
		const formatted = new Intl.NumberFormat('en-US', {
			style: 'currency',
			currency: 'SAR',
			minimumFractionDigits: 0,
			maximumFractionDigits: 0,
		}).format(num);
		return formatted;
	}
}
</script>

<style scoped>
.card {
	width: 450px !important;
	height: auto !important;
}
@media (max-width: 600px) {
	.card {
		width: 400px !important;
	}
}
</style>
