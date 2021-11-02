<template>
	<div class="mx-4 mx-sm-16">
		<v-row class="my-12 my-md-16" justify="center">
			<v-col
				style="background: #1d4283"
				class="text-center rounded-t-xl py-16"
				cols="11"
				md="8"
				elevation="12"
			>
				<h1 class="white--text text-h5 text-md-h4 py-4">
					{{ $t('financialReports.title') }}
				</h1>
			</v-col>
			<v-col class="pt-0 px-0" cols="11" md="8" elevation="4">
				<v-card class="rounded-b-xl">
					<v-tabs
						v-model="tab"
						centered
						mobile-breakpoint="100"
						slider-color="primary"
						background-color="#ffffff"
						class="info--text"
					>
						<v-tabs-slider color="primary"></v-tabs-slider>
						<v-tab
							v-for="year in years"
							class="info--text font-weight-bold text-h6 text-sm-h5"
							:key="year"
							>{{ year }}</v-tab
						>
					</v-tabs>

					<v-divider class="my-4"></v-divider>
					<v-tabs-items v-model="tab">
						<v-tab-item v-for="item in items" :key="item.name">
							<v-card>
								<v-row class="text-center">
									<v-col
										v-for="report in item"
										:key="report.name"
										cols="12"
										sm="6"
										class="px-8 py-4 d-flex"
									>
										<p
											class="
												pt-4
												d-inline
												text-body-1 text-md-h6
												align-self-center
												font-weight-bold
												text-no-wrap
												flex-grow-1
											"
										>
											{{ report.name }}
										</p>
										<v-icon class="px-2" large color="primary"
											>mdi-download-box-outline</v-icon
										>
									</v-col>
								</v-row>
							</v-card>
						</v-tab-item>
					</v-tabs-items>
				</v-card>
			</v-col>
		</v-row>
	</div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class extends Vue {
	get years() {
		return this.$t('financialReports.years');
	}
	get items() {
		return this.$t('financialReports.items');
	}
	tab = null;
}
</script>

<style scoped></style>
