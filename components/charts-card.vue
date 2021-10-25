<template>
	<div>
		<v-card
			style="position: relative"
			height="680"
			elevation="8"
			class="mt-8 px-12 rounded-lg"
		>
			<v-card-title
				style="margin-bottom: 80px"
				class="info--text font-weight-bold text-body-1 text-sm-h5"
			>
				{{ $t('chartCard.facilityAmount') }}
			</v-card-title>

			<v-card-text class="px-0 ml-0">
				<v-slider
					class="ml-0"
					:min="min"
					v-model="slider"
					:step="step"
					:max="max"
					:thumb-size="70"
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
							height: securityDepositColumn,
							width: '20%',
							position: 'absolute',
							left: securityDepositStyle,
							bottom: '20%',
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
							{{ moneyFormatter(securityDeposit) }}
						</p>
					</div>
				</v-col>
				<v-col>
					<div
						:style="{
							background:
								'linear-gradient(180deg, #1D4283 0%, rgba(46, 92, 253, 0.69) 100%)',
							height: netFinancingAmountColumn,
							width: '20%',
							position: 'absolute',
							left: '38.5%',
							bottom: '20%',
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
							{{ moneyFormatter(netFinancingAmount) }}
						</p>
					</div>
				</v-col>
				<v-col>
					<div
						:style="{
							background:
								'linear-gradient(180deg, #1D4283 0%, rgba(46, 92, 253, 0.69) 100%)',
							height: totalPaybackAmountColumn,
							width: '20%',
							position: 'absolute',
							bottom: '20%',
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
							{{ moneyFormatter(totalPaybackAmount) }}
						</p>
					</div>
				</v-col>
			</v-row>
			<!-- <div
				:style="{
					background:
						'linear-gradient(180deg, #1D4283 0%, rgba(46, 92, 253, 0.69) 100%)',
					height: securityDepositColumn,
					width: '20%',
					position: 'absolute',
					left: '8.5%',
					bottom: '20%',
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
					{{ moneyFormatter(securityDeposit) }}
				</p>
			</div>
			<div
				:style="{
					background:
						'linear-gradient(180deg, #1D4283 0%, rgba(46, 92, 253, 0.69) 100%)',
					height: netFinancingAmountColumn,
					width: '20%',
					position: 'absolute',
					left: '38.5%',
					bottom: '20%',
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
					{{ moneyFormatter(netFinancingAmount) }}
				</p>
			</div>
			<div
				:style="{
					background:
						'linear-gradient(180deg, #1D4283 0%, rgba(46, 92, 253, 0.69) 100%)',
					height: totalPaybackAmountColumn,
					width: '20%',
					position: 'absolute',
					bottom: '20%',
					left: '68.5%',
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
					{{ moneyFormatter(totalPaybackAmount) }}
				</p>
			</div> -->
			<div class="d-flex">
				<div
					style="
						position: absolute;
						relative: 15%;
						left: 2.5%;
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
						{{ $t('chartCard.securityDeposit') }}
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
						{{ $t('chartCard.netFinancingAmount') }}
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
						{{ $t('chartCard.totalPaybackAmount') }}
					</p>
				</div>
			</div>
			<p
				class="accent--text text-subtitle-2 caveat"
				style="position: absolute; bottom: 2%; left: 8%"
			>
				{{ $t('chartCard.ps') }}
			</p>
		</v-card>
	</div>
</template>

<script lang="ts">
import { Component, Emit, Prop, Vue } from 'vue-property-decorator';

@Component
export default class extends Vue {
	@Prop({ required: true }) min!: number;
	@Prop({ required: true }) max!: number;
	@Prop({ required: true }) step!: number;
	slider: number = this.step;
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
	@Emit()
	updateSlider() {
		return this.slider;
	}

	get securityDeposit() {
		return this.slider / 10;
	}
	get securityDepositColumn() {
		return `${(this.securityDeposit / this.min) * 4}%`;
	}
	get netFinancingAmount() {
		return this.slider - this.slider / 10;
	}
	get netFinancingAmountColumn() {
		return `${(this.netFinancingAmount / this.min) * 4}%`;
	}
	get totalPaybackAmount() {
		return this.slider * 1.25;
	}
	get totalPaybackAmountColumn() {
		return `${(this.totalPaybackAmount / this.min) * 4}%`;
	}
}
</script>

<style scoped>
.card {
	width: 450px !important;
	height: 560px !important;
}

@media (max-width: 390px) {
	.graph {
		width: 100px;
		position: relative;
		right: 25%;
	}
}
@media (max-width: 350px) {
	.graph {
		right: 35%;
	}
}
@media (max-width: 472px) {
	.legend {
		bottom: 12% !important;
	}
}
@media (max-width: 328px) {
	.legend {
		bottom: 10% !important;
	}
	.caveat {
		bottom: 0.5% !important;
	}
}
</style>
