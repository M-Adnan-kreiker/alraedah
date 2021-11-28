<template>
	<div>
		<v-row align="center" v-if="category === 'e-commerce'">
			<div class="d-flex align-center mt-n8 pt-2">
				<p
					class="
						mt-4
						px-4
						text-body-1 text-sm-h6 text-md-h5
						primary--text
						font-weight-bold
						text-h6
					"
				>
					{{ $t('paybackPeriod') }}
				</p>
				<v-select
					:append-icon="mdiChevronDown"
					class="pt-4 mx-4"
					:items="items"
					label="Payback period"
					dense
					solo
					v-model="selectedPeriod"
					style="width: 120px"
				></v-select>
			</div>
		</v-row>
		<v-card
			style="position: relative"
			height="640"
			elevation="4"
			class="mt-8 px-4 px-md-12 rounded-xl"
		>
			<v-row>
				<v-card-title
					class="info--text font-weight-bold mb-6 text-body-1 text-sm-h5"
				>
					{{ $t('chartCard.facilityAmount') }}
				</v-card-title>
			</v-row>
			<v-card-text class="px-0 mt-14 ml-0">
				<v-slider
					class="ml-0 px-4"
					:min="min"
					v-model="slider"
					:step="step"
					:max="max"
					:thumb-size="72"
					thumb-label="always"
					ticks="always"
					tick-size="4"
					thumb-color="primary"
				>
					<template v-slot:thumb-label="{ value }">
						{{ moneyFormatter(value) }}
					</template></v-slider
				>
			</v-card-text>
			<v-row>
				<v-col>
					<div
						:style="{
							background:
								'linear-gradient(180deg, #1D4283 0%, rgba(46, 92, 253, 0.69) 100%)',
							height: firstColHeight,
							width: '23%',
							position: 'absolute',
							left: securityDepositStyle,
							bottom: '22%',
						}"
					>
						<p
							class="
								primary--text
								text-subtitle-2 text-sm-body-1 text-no-wrap
								graph
								text-center
								font-weight-bold
								mt-n8
							"
						>
							{{ moneyFormatter(firstCol) }}
						</p>
					</div>
				</v-col>
				<v-col>
					<div
						:style="{
							background:
								'linear-gradient(180deg, #1D4283 0%, rgba(46, 92, 253, 0.69) 100%)',
							height: secondColHeight,
							width: '23%',
							position: 'absolute',
							left: '38.5%',
							bottom: '22%',
						}"
					>
						<p
							class="
								primary--text
								text-subtitle-2 text-sm-body-1 text-no-wrap
								graph
								text-center
								font-weight-bold
								mt-n8
							"
						>
							{{ moneyFormatter(secondCol) }}
						</p>
					</div>
				</v-col>
				<v-col>
					<div
						:style="{
							background:
								'linear-gradient(180deg, #1e4382 0%, rgba(46, 92, 253, 0.69) 100%)',
							height: thirdColHeight,
							width: '23%',
							position: 'absolute',
							bottom: '22%',
							left: paybackStyle,
						}"
					>
						<p
							class="
								primary--text
								text-center text-subtitle-2 text-no-wrap
								graph
								text-sm-body-1
								font-weight-bold
								mt-n8
							"
						>
							{{ moneyFormatter(thirdCol) }}
						</p>
					</div>
				</v-col>
			</v-row>
			<div class="d-flex">
				<div
					style="
						position: absolute;
						relative: 15%;
						left: 4.2%;
						bottom: 13.5%;
						width: 91.5%;
					"
					class="d-flex legend text-center"
				>
					<p
						style="flex-basis: 100%"
						class="
							font-weight-bold
							text-pre-line
							flex-grow-1 flex
							text-center text-caption text-sm-subtitle-2
							pt-sm-2
							mb-0
						"
					>
						{{ firstColumn }}
					</p>
					<p
						style="flex-basis: 100%"
						class="
							font-weight-bold
							text-pre-line
							flex-grow-1
							text-caption text-sm-subtitle-2
							pt-sm-2
							mb-0
						"
					>
						{{ secondColumn }}
					</p>
					<p
						style="flex-basis: 100%"
						class="
							font-weight-bold
							text-pre-line
							flex-grow-1
							text-caption text-sm-subtitle-2
							pt-sm-2
							mb-0
						"
					>
						{{ thirdColumn }}
						<span v-if="category === 'e-commerce'">{{ selectedPeriod }}</span>
					</p>
				</div>
			</div>
			<p
				:class="$i18n.locale === 'en' ? 'mr-5' : 'ml-5'"
				class="accent--text text-subtitle-2 mb-1 mb-sm-4 text-sm-body-1 caveat"
				style="position: absolute; bottom: 2%"
				:style="$i18n.locale === 'en' ? 'left: 8%' : 'right: 8%'"
			>
				{{ $t('chartCard.ps') }}
			</p>
		</v-card>
	</div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { mdiChevronDown } from '@mdi/js';

@Component
export default class extends Vue {
	mdiChevronDown = mdiChevronDown;
	@Prop({ required: true }) min!: number;
	@Prop({ required: true }) max!: number;
	@Prop({ required: true }) step!: number;
	@Prop({ required: true }) category!: string;
	@Prop({ required: true }) firstColumn!: string;
	@Prop({ required: true }) secondColumn!: string;
	@Prop({ required: true }) thirdColumn!: string;
	@Prop() fourthColumn!: string;
	@Prop() fifthColumn!: string;
	@Prop({ required: true }) feesRatio1!: number;
	@Prop() feesRatio2!: number;
	@Prop() feesRatio3!: number;
	@Prop() feesRatio4!: number;
	@Prop() options!: string[];
	items = this.options;
	slider: number = this.step;
	ratio = this.feesRatio1;
	ratio2 = this.feesRatio2;
	ratio3 = this.feesRatio3;
	ratio4 = this.feesRatio4;
	selectedPeriod = this.options[0];
	moneyFormatter(num: number) {
		const formatted = new Intl.NumberFormat(
			this.$i18n.locale === 'ar' ? 'ar-SA' : 'en-US',
			{
				style: 'currency',
				currency: 'SAR',
				minimumFractionDigits: 0,
				maximumFractionDigits: 0,
			}
		).format(num);
		return formatted;
	}
	get paybackStyle() {
		return this.$i18n.locale === 'en' ? '68.5%' : '8.5%';
	}
	get securityDepositStyle() {
		return this.$i18n.locale === 'en' ? '8.5%' : '68.5%';
	}

	get firstCol() {
		if (this.category === 'lite') {
			return this.slider;
		} else {
			return this.slider / 10;
		}
	}
	get firstColHeight() {
		return `${(this.firstCol / this.min) * 3.5}%`;
	}
	get secondCol() {
		if (this.category === 'lite') {
			return this.slider * this.ratio;
		} else {
			return this.slider - this.slider / 10;
		}
	}
	get secondColHeight() {
		return `${(this.secondCol / this.min) * 3.5}%`;
	}
	get thirdCol() {
		if (this.category === 'lite') {
			return this.slider * this.ratio2;
		}
		if (
			(this.category === 'e-commerce' && this.selectedPeriod === '26 Weeks') ||
			this.selectedPeriod === '٢٦ أسبوع'
		) {
			return this.slider * this.ratio2;
		}
		if (
			(this.category === 'e-commerce' && this.selectedPeriod === '39 Weeks') ||
			this.selectedPeriod === '٣٩ أسبوع'
		) {
			return this.slider * this.ratio3;
		}
		if (
			(this.category === 'e-commerce' && this.selectedPeriod === '52 Weeks') ||
			this.selectedPeriod === '٥٢ أسبوع'
		) {
			return this.slider * this.ratio4;
		} else {
			return this.slider * this.ratio;
		}
	}
	get thirdColHeight() {
		return `${(this.thirdCol / this.min) * 3.5}%`;
	}
}
</script>

<style scoped>
.card {
	width: 450px !important;
	height: 560px !important;
}

@media (max-width: 420px) {
	.graph {
		width: 100px;
		position: absolute;
		/* right: 50%; */
		left: 50%;
		transform: translate(-50%, -10%);
	}
}
/* @media (max-width: 350px) {
	.graph {
		right: 35%;
	}
} */
@media (max-width: 475px) {
	.legend {
		bottom: 11% !important;
	}
}
@media (max-width: 328px) {
	.legend {
		bottom: 10% !important;
	}
	.caveat {
		bottom: 2% !important;
	}
}
</style>
