<template>
	<main :class="$vuetify.breakpoint.smAndUp ? 'bg' : ''" class="py-6">
		<v-row class="mx-4 mx-sm-8">
			<v-col cols="12">
				<!-- prettier-ignore -->
				<h2
					class="
						font-weight-bold
						text-h5 text-sm-h4 text-md-h3 text-wrap
						primary--text
						text-start
					"
				>{{ $t('solutions.title') }}
				</h2>
			</v-col>
			<v-col cols="12" md="6">
				<p
					class="
						accent--text
						text-body-1
						solution-text
						text-sm-h6 text-md-h5 text-wrap
					"
				>
					{{ $t('solutions.text') }}
				</p>
			</v-col>
			<v-col class="pa-0" cols="12" md="6">
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
						elevation="4"
						color="#ffffff"
						class="rounded-xl cards mx-auto mx-sm-2"
						min-height="370px"
						min-width="260"
						max-width="370"
						max-height="400"
					>
						<v-row>
							<v-col
								sm="12"
								class="d-flex flex-column justify-center align-center"
							>
								<img
									class="d-block mt-10"
									height="100"
									width="103"
									:src="card.img"
								/>
								<v-card-title
									class="
										text-body-1 text-sm-subtitle-1 text-lg-h6
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
										font-weight-regular
										px-4 px-md-6
										sub-text
										text-center
										info--text
									"
								>
									{{ card.text }}
								</v-card-text>
							</v-col>
						</v-row>
					</v-card>
				</v-col>
			</v-row>
		</section>

		<section class="d-block d-sm-none mt-10">
			<v-card color="transparent" flat>
				<v-window class="pa-4" v-model="onboarding">
					<v-window-item v-for="card in cards" :key="card.id">
						<v-card
							elevation="4"
							color="#ffffff"
							class="rounded-xl cards mx-auto mx-sm-2"
							min-height="370px"
							min-width="280"
							max-width="370"
							max-height="350"
						>
							<v-col
								sm="12"
								class="d-flex flex-column justify-center align-center"
							>
								<v-img
									contain
									class="d-block mt-10"
									height="100"
									width="103"
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
					<v-item-group
						active-class="secondary"
						v-model="onboarding"
						class="text-center"
					>
						<v-item
							v-for="n in length"
							:key="`btn-${n}`"
							v-slot="{ active, toggle }"
						>
							<v-btn :input-value="active" icon @click="toggle">
								<v-icon>{{ mdiRecord }}</v-icon>
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
import { mdiRecord } from '@mdi/js';

@Component
export default class extends Vue {
	mdiRecord = mdiRecord;
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

.solution-text {
	line-height: 170% !important;
}

h2 {
	line-height: 140% !important;
}
.v-btn--icon.v-size--default .v-icon,
.v-btn--fab.v-size--default .v-icon {
	height: 15px;
	font-size: 24px;
	width: 15px;
	background: darkgray;
	border-radius: 50%;
}
</style>
