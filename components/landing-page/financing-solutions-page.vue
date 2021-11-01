<template>
	<main
		class="bg py-sm-6"
		:style="{ background: 'url(/raedah-bg.svg) no-repeat left center' }"
	>
		<v-row class="mx-4 mx-sm-8">
			<v-col cols="12">
				<!-- prettier-ignore -->
				<h1
					class="
						font-weight-bold
						text-h5 text-sm-h4 text-md-h3 text-wrap
						primary--text
						text-pre-line
					"
				>{{ $t('solutions.title') }}
				</h1>
			</v-col>
			<v-col class="mt-sm-10" cols="12" md="6">
				<p class="accent--text text-body-1 text-sm-h6 text-md-h5 text-wrap">
					{{ $t('solutions.text') }}
				</p>
			</v-col>
			<v-col class="" cols="12" md="6">
				<Lazy-video-info></Lazy-video-info>
			</v-col>
		</v-row>

		<section class="mt-16 mx-10 d-none d-sm-block">
			<v-row>
				<v-col
					class="d-flex justify-center"
					cols="12"
					sm="6"
					md="4"
					v-for="card in cards"
					:key="card.title"
				>
					<v-card
						elevation="8"
						color="#ffffff"
						class="rounded-lg cards mx-auto mx-sm-2"
						hover
						min-height="370px"
						min-width="260"
						max-width="370"
						max-height="400"
					>
						<v-col
							sm="12"
							class="d-flex flex-column justify-center align-center"
						>
							<img
								class="d-block mt-10"
								max-height="110"
								max-width="103"
								:src="card.img"
							/>
							<v-card-title
								class="
									text-body-1 text-md-subtitle-1 text-lg-h6
									main-text
									px-0
									font-weight-bold
									text-no-wrap
								"
								primary-title
							>
								{{ card.title }}
							</v-card-title>
							<v-card-text
								class="
									text-body-1
									font-weight-bold
									px-4 px-md-6
									sub-text
									text-center
									info--text
								"
							>
								{{ card.text }}
							</v-card-text>
						</v-col>
					</v-card>
				</v-col>
			</v-row>
		</section>

		<section class="d-block d-sm-none mt-10">
			<v-card flat tile>
				<v-window class="pa-4" v-model="onboarding">
					<v-window-item v-for="card in cards" :key="card.id">
						<v-card
							elevation="8"
							color="#ffffff"
							class="rounded-lg cards mx-auto mx-sm-2"
							hover
							min-height="370px"
							min-width="280"
							max-width="370"
							max-height="400"
						>
							<v-col
								sm="12"
								class="d-flex flex-column justify-center align-center"
							>
								<v-img
									class="d-block mt-10"
									max-height="110"
									max-width="103"
									:src="card.img"
								></v-img>
								<v-card-title
									class="
										text-body-1 text-md-subtitle-1 text-lg-h6
										main-text
										px-0
										font-weight-bold
										text-no-wrap
									"
									primary-title
								>
									{{ card.title }}
								</v-card-title>
								<v-card-text
									class="
										text-body-1
										px-4 px-md-6
										sub-text
										text-center
										info--text
									"
								>
									{{ card.text }}
								</v-card-text>
							</v-col>
						</v-card>
					</v-window-item>
				</v-window>

				<v-card-actions class="justify-center">
					<v-item-group v-model="onboarding" class="text-center" mandatory>
						<v-item
							v-for="n in length"
							:key="`btn-${n}`"
							v-slot="{ active, toggle }"
						>
							<v-btn :input-value="active" icon @click="toggle">
								<v-icon>mdi-record</v-icon>
							</v-btn>
						</v-item>
					</v-item-group>
				</v-card-actions>
			</v-card>
		</section>
	</main>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class extends Vue {
	get cards() {
		return this.$t('solutions.cards');
	}

	onboarding = 0;
	length = 6;
	next() {
		this.onboarding =
			this.onboarding + 1 === this.length ? 0 : this.onboarding + 1;
	}
	prev() {
		this.onboarding =
			this.onboarding - 1 < 0 ? this.length - 1 : this.onboarding - 1;
	}
}
</script>

<style scoped>
.cards {
	max-width: 40vw;
}
@media (max-width: 700px) {
	.cards {
		max-width: 60vw;
	}
}
@media (min-width: 600px) and (max-width: 720px) {
	.main-text,
	.sub-text {
		font-size: 14px !important;
	}
}
@media (max-width: 500px) {
	.cards {
		max-width: 85vw !important;
	}
}
</style>
