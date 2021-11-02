<template>
	<div class="my-sm-8">
		<div>
			<h1
				class="
					text-center text-h5 text-sm-h4 text-md-h3
					font-weight-bold
					primary--text
					pt-2
				"
			>
				{{ $t('productsTable.title') }}
			</h1>
			<h2
				class="
					text-center text-h6 text-sm-h5
					mb-6
					text-md-h4
					pt-2 pt-sm-8
					info--text
					px-2
				"
			>
				{{ $t('productsTable.text') }}
			</h2>
		</div>
		<v-sheet class="mx-n6">
			<v-slide-group class="py-sm-6 mx-2 px-4" mobile-breakpoint="100">
				<v-slide-item
					class="mx-2 mx-sm-4"
					v-for="card in productCards"
					:key="card.id"
				>
					<div>
						<pricing-card :card="card">
							<template v-slot:header>
								{{ card.type }}
							</template>
							<template v-slot:amount>
								<div
									class="
										white--text
										py-0
										my-auto
										text-center text-h5 text-sm-h5
									"
								>
									{{ $t('upTo') }} <br />
									<span>{{ card.upTo }}</span>
								</div>
							</template>
							<template v-slot:content>
								<div class="d-flex flex-column">
									<div v-for="(item, j) in card.card.info" :key="j">
										<div class="d-flex">
											<img
												class="mx-2 mx-sm-3 pt-2 align-self-start"
												src="/checkMark.svg"
												alt=""
											/>
											<p
												class="
													my-1
													px-2
													white--text
													text-subtitle-2
													px-0
													mx-2
													py-0
													text-sm-subtitle-1
													px-0
													mx-2
													py-0
												"
											>
												{{ item }}
											</p>
										</div>
									</div>
								</div>
							</template>
							<template v-slot:button>
								<v-btn
									:to="localeRoute(card.link)"
									class="
										primary--text
										rounded-lg
										font-weight-bold
										px-4
										py-6
										px-sm-12
										py-sm-6
										text-body-1
									"
									>{{ $t('moreInfoButton') }}</v-btn
								>
							</template>
						</pricing-card>
					</div>
				</v-slide-item>
			</v-slide-group>
		</v-sheet>
	</div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class extends Vue {
	get productCards() {
		return this.$t('products');
	}
}
</script>

<style scoped>
.dis {
	display: none;
}
.card {
	width: 350px !important;
}
@media (max-width: 800px) {
	.main-row {
		display: none;
	}
	.dis {
		display: table-cell;
	}
}

@media (max-width: 450px) {
	.td {
		font-size: 12px !important;
		padding: 6px !important;
	}
}

@media (max-width: 600px) {
	.card {
		width: 53vw !important;
		height: 580px !important;
	}
}
</style>
