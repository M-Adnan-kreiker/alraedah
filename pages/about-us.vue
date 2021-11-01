<template>
	<div class="mx-4 mx-sm-16 my-16">
		<h1
			class="
				primary--text primary--text
				text-sm-h4 text-start text-md-h3
				font-weight-bold
				mt-4 mt-sm-8
			"
		>
			{{ $t('aboutUs.title') }}
		</h1>
		<v-row class="mt-12">
			<v-col cols="12" class="mt-n10" md="6">
				<p class="info--text text-h6 text-pre-line">
					{{ $t('aboutUs.text') }}
				</p>
			</v-col>
			<v-col cols="12" md="6">
				<v-img class="rounded-lg" src="/mission.webp"></v-img>
			</v-col>
		</v-row>
		<v-row>
			<v-col v-for="card in cards" :key="card.id" cols="12" lg="6">
				<info-card :elevation="10" :card="card">
					<template v-slot:title>
						<h1
							:class="$i18n.locale === 'en' ? 'pr-4' : 'pl-4'"
							class="mb-sm-2 primary--text"
						>
							{{ card.title }}
						</h1>
					</template>
				</info-card>
			</v-col>
		</v-row>
		<v-row class="mt-16">
			<v-col>
				<h1 class="mb-8 primary--text text-center">
					{{ $t('aboutUs.leadership') }}
				</h1>
				<v-row justify="center">
					<v-col
						class="my-0"
						cols="12"
						sm="10"
						md="6"
						v-for="pillar in pillars"
						:key="pillar.title"
					>
						<info-card elevation="12" :card="pillar">
							<template v-slot:title>
								<h1
									:class="$i18n.locale === 'en' ? 'pr-4' : 'pl-4'"
									class="mb-sm-2 primary--text text-h5 font-weight-bold"
								>
									{{ pillar.title }}
								</h1>
							</template>
						</info-card>
					</v-col>
				</v-row>
			</v-col>
		</v-row>
	</div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class extends Vue {
	get pillars() {
		return this.$t('aboutUs.subCards');
	}

	get cards() {
		return this.$t('aboutUs.mainCards');
	}
}
</script>

<style scoped></style>
