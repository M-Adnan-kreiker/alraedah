<template>
	<div v-if="myProduct" class="mx-4 mx-sm-8 mx-md-10 mx-lg-16 mt-16">
		<social-head
			:title="myProduct[0].seo.title"
			:description="myProduct[0].seo.description"
		></social-head>
		<v-sheet elevation="4" class="rounded-xl my-16">
			<product-card :products="myProduct"></product-card>
		</v-sheet>
		<h2 class="primary--text text-h4 font-weight-bold mb-8">
			{{ $t('chargesCalc') }}
		</h2>
		<div class="mb-12">
			<fees-info
				:fees="myProduct[0].fees"
				:moreInfo="myProduct[0].moreInfo"
			></fees-info>
		</div>
		<v-row class="mb-16 mx-n5 mx-sm-2">
			<v-col class="mb-4" cols="12" md="7">
				<charts-card class="" v-bind="props"></charts-card>
			</v-col>
			<v-col
				:class="route === 'e-commerce' ? 'mt-sm-16' : ''"
				cols="12"
				md="5"
				class="mt-6"
			>
				<pricing-card class="mx-auto mt-sm-n2" :card="myProduct[0].card">
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
								<span
									class="
										text-sm-h6 text-body-1
										d-block
										font-weight-regular
										text-wrap
									"
									>{{ item }}</span
								>
							</div>
						</div>
					</template>
					<template v-slot:button>
						<apply-now-button
							:buttonTextColor="'#1D4283'"
							:buttonColor="'#ffffff'"
							:buttonText="$i18n.locale === 'ar' ? 'قدّم' : 'Apply'"
							:buttonPadding="'28px 80px'"
							class="my-3"
						></apply-now-button>
					</template>
				</pricing-card>
			</v-col>
		</v-row>
		<v-row>
			<v-col cols="12" md="6">
				<p class="black--text font-weight-bold mt-n8 mx-sm-8 mb-16">
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
	route = this.$route.params.id;
	products: any = this.$t('products');
	myProduct = this.products.filter(
		(el: any) => el.category === this.$route.params.id
	);
	step: number = this.myProduct[0].step;
	max: number = this.myProduct[0].max;
	min: number = this.myProduct[0].step;
	category = this.myProduct[0].category;
	slider = this.myProduct[0].step;
	firstColumn = this.myProduct[0].firstColumn;
	secondColumn = this.myProduct[0].secondColumn;
	thirdColumn = this.myProduct[0].thirdColumn;
	fourthColumn = this.myProduct[0].fourthColumn;
	fifthColumn = this.myProduct[0].fifthColumn;
	feesRatio1 = this.myProduct[0].feesRatio1;
	feesRatio2 = this.myProduct[0].feesRatio2;
	feesRatio3 = this.myProduct[0].feesRatio3;
	feesRatio4 = this.myProduct[0].feesRatio4;
	options = this.myProduct[0].options;
	local: string = this.$i18n.locale;
	props = {
		step: this.step,
		max: this.max,
		min: this.min,
		category: this.category,
		slider: this.slider,
		firstColumn: this.firstColumn,
		secondColumn: this.secondColumn,
		thirdColumn: this.thirdColumn,
		fourthColumn: this.fourthColumn,
		fifthColumn: this.fifthColumn,
		feesRatio1: this.feesRatio1,
		feesRatio2: this.feesRatio2,
		feesRatio3: this.feesRatio3,
		feesRatio4: this.feesRatio4,
		options: this.options,
	};
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
