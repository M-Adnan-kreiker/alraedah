<template>
	<div class="mx-4 mx-sm-8 mx-md-16">
		<v-row
			class="mt-3"
			:class="$i18n.locale === 'ar' ? 'ml-sm-n16' : 'mr-sm-n16'"
		>
			<v-col class="pb-0" cols="12" sm="5">
				<div class="">
					<!-- prettier-ignore -->
					<h1 class="primary--text text-start text-sm-h4 text-md-h3 pt-10 font-weight-bold">{{ $t('pricing.title')}}</h1>
					<h2
						class="info--text text-body-1 text-sm-h6 font-weight-regular mb-8"
					>
						{{ $t('pricing.hint') }}
					</h2>
					<p class="info--text text-body-1 text-md-h6 mb-12 text-h6">
						{{ $t('pricing.text') }}
					</p>
				</div>
				<v-select
					class=""
					nudge-bottom="30"
					:items="select"
					:label="$t('pricing.selectProduct')"
					outlined
					offset-y="12"
					return-object
					@change="select_value"
				></v-select>
			</v-col>
			<v-col class="px-0 py-0" cols="12" sm="7">
				<v-img
					:style="$i18n.locale === 'ar' ? 'transform: scaleX(-1)' : ''"
					height="100%"
					src="/calculator.webp"
				></v-img>
			</v-col>
		</v-row>
		<transition name="slide-fade" mode="out-in">
			<div v-if="myProduct[0]">
				<transition name="slide-fade" mode="out-in">
					<fees-info
						class="mt-8"
						:key="feesKey"
						:fees="myProduct[0].fees"
					></fees-info>
				</transition>
				<v-row justify="center">
					<v-col cols="12" md="7">
						<transition name="slide-fade" mode="out-in">
							<charts-card v-bind="props" :key="componentKey"></charts-card>
						</transition>
					</v-col>
					<v-col cols="12" class="mt-4" md="5">
						<transition name="slide-fade" mode="out-in">
							<pricing-card :key="pricingKey" :card="myProduct[0].card">
								<template v-slot:header>
									{{ myProduct[0].type }}
								</template>
								<template class="mt-n6" v-slot:content>
									<div class="d-flex flex-column">
										<div
											class="my-2 d-flex"
											v-for="(item, i) in myProduct[0].card.info"
											:key="i"
										>
											<img
												class="mx-2 align-self-start pt-1 mr-sm-4"
												src="/checkMark.svg"
												alt=""
											/>
											<span class="text-body-1 text-wrap">{{ item }}</span>
										</div>
									</div>
								</template>
								<template v-slot:button>
									<apply-now-button
										:buttonTextColor="'#1D4283'"
										:buttonColor="'#ffffff'"
										:buttonText="
											$i18n.locale === 'ar' ? 'قدّم الآن' : 'Apply Now'
										"
										:buttonPadding="'28px 80px'"
									></apply-now-button>
								</template>
							</pricing-card>
						</transition>
					</v-col>
				</v-row>
				<v-row>
					<v-col cols="12" md="6">
						<p class="black--text font-weight-bold ml-sm-8 mb-16">
							{{ myProduct[0].caveat }}
						</p>
					</v-col>
				</v-row>
			</div>
		</transition>
	</div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { myProduct } from '~/types';

@Component
export default class extends Vue {
	get select() {
		return this.$t('pricing.products');
	}
	get products(): any {
		return this.$t('products');
	}
	myProduct = [] as myProduct[];
	selected: string = '';
	step!: number;
	max!: number;
	min!: number;
	slider!: number;
	category!: string;
	firstColumn!: string;
	secondColumn!: string;
	thirdColumn!: string;
	fourthColumn!: string;
	fifthColumn!: string;
	feesRatio1!: number;
	feesRatio2!: number;
	feesRatio3!: number;
	feesRatio4!: number;
	options!: string[] | '';
	props = {};
	componentKey: number = 0;
	pricingKey: number = 0;
	feesKey: number = 0;
	select_value(e: string) {
		// this.slider = 0;
		this.selected = e;
		this.myProduct = this.products.filter(
			(el: any) => el.type === this.selected!.toLowerCase()
		);
		this.componentKey += 1;
		this.pricingKey += 1;
		this.feesKey += 1;
		this.step = this.myProduct[0].step;
		this.min = this.myProduct[0].step;
		this.max = this.myProduct[0].max;
		this.slider = this.myProduct[0].step;
		this.category = this.myProduct[0].category;
		this.firstColumn = this.myProduct[0].firstColumn;
		this.secondColumn = this.myProduct[0].secondColumn;
		this.thirdColumn = this.myProduct[0].thirdColumn;
		this.fourthColumn = this.myProduct[0].fourthColumn;
		this.fifthColumn = this.myProduct[0].fifthColumn;
		this.feesRatio1 = this.myProduct[0].feesRatio1;
		this.feesRatio2 = this.myProduct[0].feesRatio2;
		this.feesRatio3 = this.myProduct[0].feesRatio3;
		this.feesRatio4 = this.myProduct[0].feesRatio4;
		this.options = this.myProduct[0].options;
		this.props = {
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
	}
}
</script>

<style scoped>
.card {
	max-width: 420px;
	width: 100% !important;
	height: 560px !important;
}
</style>
