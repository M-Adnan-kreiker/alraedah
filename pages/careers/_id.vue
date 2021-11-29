<template>
	<main>
		<div v-if="job" class="mt-10 mx-4 mx-sm-16">
			<v-row justify="center">
				<v-col cols="12" sm="10" md="8">
					<h1
						class="
							primary--text
							text-sm-h5 text-pre-line text-md-h4
							font-weight-bold
							mb-4
						"
					>
						{{ job.attributes.position }}
					</h1>
					{{ job.attributes.description }}
					<h3 class="mt-6 secondary--text">{{ $t('mainRequirements') }}</h3>
					<v-list>
						<v-list-item>
							{{ job.attributes.requirements }}
						</v-list-item>
					</v-list>
					<h3 class="mt-6 secondary--text">{{ $t('benefits') }}</h3>
					<v-list>
						<v-list-item style="background: transparent">
							{{ job.attributes.benefits }}
						</v-list-item>
					</v-list>
					<h3 class="mt-6 secondary--text">{{ $t('ourvalues') }}</h3>
					{{ job.attributes.values }}
				</v-col>
			</v-row>
			<v-row justify="center">
				<v-col cols="12" md="9">
					<generic-form>
						<!-- prettier-ignore -->
						<template v-slot:title>{{ $t('careers.info') }}</template>
						<template v-slot:file>
							<v-col class="py-0" cols="12">
								<v-file-input
									class="pt-0"
									flat
									prepend-icon=""
									:prepend-inner-icon="mdiPaperclip"
									outlined
									solo
									accept=".pdf"
									:label="$t('uploadResume')"
								>
								</v-file-input>
							</v-col>
						</template>
						<template v-slot:image>
							<v-img
								:class="$i18n.locale === 'en' ? 'rounded-r-xl' : 'rounded-l-xl'"
								class="py-0"
								height="100%"
								src="/careers.jpg"
								alt=""
							/>
						</template>
					</generic-form>
				</v-col>
			</v-row>
		</div>
		<v-row class="progress-circle" justify="center" v-else>
			<v-col cols="1">
				<v-progress-circular
					:size="70"
					color="primary"
					indeterminate
					class="mx-auto"
				></v-progress-circular>
			</v-col>
		</v-row>
	</main>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { mdiPaperclip } from '@mdi/js';

@Component
export default class extends Vue {
	mdiPaperclip = mdiPaperclip;
	job = null;
	async fetch() {
		try {
			const res = await this.$axios.$get(
				`${process.env.CAREERS_ENDPOINT}/${this.$route.params.id}`,
				{
					params: { locale: this.$i18n.locale },
				}
			);

			this.job = res.data;
		} catch (error) {
			console.log(error);
		}
	}
}
</script>

<style scoped>
.theme--light.v-list {
	background: transparent !important;
}
main {
	min-height: 600px;
}
.progress-circle {
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
}
</style>
