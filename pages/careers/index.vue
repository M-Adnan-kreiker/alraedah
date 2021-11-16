<template>
	<div class="mx-4 mx-sm-8 mx-md-16 mt-16">
		<v-row>
			<v-col cols="12" class="center-text" sm="9">
				<!-- prettier-ignore -->
				<h1
					class="
						primary--text
						text-sm-h4 text-pre-line text-md-h3
						font-weight-bold
					"
				>{{ $t('careers.title') }}
				</h1>
				<p class="info--text text-body-1 text-pre-line text-md-h6 text-h6">
					{{ $t('careers.text') }}
				</p>
			</v-col>
		</v-row>
		<v-row class="mb-8">
			<!-- prettier-ignore -->
			<v-col cols="12" class="center-text" sm="9">
				<h1
					class="
						primary--text
						text-sm-h4 text-pre-line text-md-h3
						font-weight-bold
				
					"
				>{{ $t('currentOpenings') }}
				</h1>
			</v-col>
		</v-row>
		<v-row v-if="jobs" class="mb-8">
			<v-col v-for="job in jobs" :key="job.id" cols="12" sm="6">
				<nuxt-link :to="localeRoute(`/careers/${job.id}`)">
					<v-card hover max-width="400px" class="rounded-xl mx-auto">
						<v-card-title class="secondary--text">
							{{ job.attributes.position }}
						</v-card-title>
						<v-card-text> {{ job.attributes.location }} </v-card-text>
					</v-card>
				</nuxt-link>
			</v-col>
		</v-row>
	</div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { Job } from '~/types';

@Component
export default class extends Vue {
	jobs = [] as Job[];
	async fetch() {
		try {
			const res = await this.$axios.$get(`${process.env.CAREERS_ENDPOINT}`, {
				params: { locale: this.$i18n.locale },
			});

			this.jobs = res.data;
		} catch (error) {
			console.log(error);
		}
	}
}
</script>

<style scoped>
a {
	text-decoration: none !important;
}
</style>
