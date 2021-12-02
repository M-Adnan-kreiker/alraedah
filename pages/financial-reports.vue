<template>
	<main>
		<div class="mx-4 mx-sm-16">
			<social-head
				:title="$t('seo.financialReports.title')"
				:description="$t('seo.financialReports.description')"
			></social-head>
			<v-row class="my-12 my-md-16" justify="center">
				<v-col
					style="background: #1d4283"
					class="text-center rounded-t-xl py-16"
					cols="11"
					sm="12"
					md="10"
					elevation="12"
				>
					<h1 class="white--text text-h5 text-md-h4 py-4">
						{{ $t('financialReports.title') }}
					</h1>
				</v-col>
				<v-col class="pt-0 px-0" cols="11" sm="12" md="10" elevation="4">
					<v-card class="rounded-b-xl">
						<v-tabs
							v-model="tab"
							mobile-breakpoint="350"
							background-color="#ffffff"
							class="info--text px-0"
							:next-icon="mdiArrowRight"
							:prev-icon="mdiArrowLeft"
							centered
						>
							<!-- <v-tabs-slider color="primary"></v-tabs-slider> -->
							<v-tab
								v-for="year in years"
								class="
									info--text
									font-weight-bold
									px-0 px-sm-6 px-md-8 px-lg-12
									pt-5
									text-body-2 text-md-h5
								"
								:key="year"
								>{{ year }}</v-tab
							>
						</v-tabs>
						<v-divider class="my-4"></v-divider>
						<v-tabs-items v-model="tab">
							<v-tab-item
								v-for="(reportYear, i) in reports"
								:key="reportYear[i]"
							>
								<v-card>
									<v-row class="text-center">
										<v-col
											v-for="report in reportYear"
											:key="report.name"
											cols="12"
											sm="6"
											class="px-8 py-4 d-flex"
										>
											<p
												class="
													pt-2
													d-inline
													text-body-1 text-md-h6
													align-self-center
													font-weight-bold
													text-no-wrap
													flex-grow-1
												"
											>
												{{ report.attributes.name }}
											</p>
											<a
												:href="report.attributes.file"
												target="#"
												:download="report.attributes.name"
											>
												<v-icon class="px-2 mt-2" color="primary">{{
													mdiDownloadBox
												}}</v-icon>
											</a>
										</v-col>
									</v-row>
								</v-card>
							</v-tab-item>
						</v-tabs-items>
					</v-card>
				</v-col>
			</v-row>
		</div>
	</main>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { FinancialReport } from '~/types';
import { mdiArrowRight, mdiArrowLeft, mdiDownloadBox } from '@mdi/js';

@Component
export default class extends Vue {
	mdiArrowRight = mdiArrowRight;
	mdiArrowLeft = mdiArrowLeft;
	mdiDownloadBox = mdiDownloadBox;
	get years() {
		return this.$t('financialReports.years');
	}
	get items() {
		return this.$t('financialReports.items');
	}
	tab = null;
	reports = [[], [], [], [], [], []] as FinancialReport[][];
	async fetch() {
		try {
			const res = await this.$axios.$get(`${process.env.REPORTS_ENDPOINT}`, {
				params: { locale: this.$i18n.locale },
			});
			const reports = res.data;
			reports.forEach((report: FinancialReport) => {
				if (report.attributes.year == 2016) {
					this.reports[0].push(report);
				} else if (report.attributes.year == 2017) {
					this.reports[1].push(report);
				} else if (report.attributes.year == 2018) {
					this.reports[2].push(report);
				} else if (report.attributes.year == 2019) {
					this.reports[3].push(report);
				} else if (report.attributes.year == 2020) {
					this.reports[4].push(report);
				} else if (report.attributes.year == 2021) {
					this.reports[5].push(report);
				}
			});
		} catch (error) {
			console.log(error);
		}
	}
}
</script>

<style scoped>
@media (min-width: 700px) {
	main {
		min-height: 80vh;
	}
}
</style>
