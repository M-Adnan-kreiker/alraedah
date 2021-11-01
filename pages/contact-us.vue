<template>
	<div :style="{ background: 'url(/raedah-bg.svg) no-repeat left top' }">
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
					>{{ $t('contactUs.title') }}</h1>
					<p class="info--text text-pre-line text-md-h5 text-h6">
						{{ $t('contactUs.text') }}
					</p>
				</v-col>
			</v-row>
			<v-row align="center" justify="center">
				<v-col v-for="info in infos" :key="info.title">
					<v-card
						elevation="12"
						min-height="380"
						min-width="280"
						max-width="450"
						class="py-4 mx-auto px-sm-4 px-md-8 d-flex flex-column align-center"
					>
						<div>
							<v-img height="120" contain width="140" :src="info.image"></v-img>
						</div>
						<v-card-title class="text-sm-h6 text-center text-md-h5 flex-grow-1">
							{{ info.title }}
						</v-card-title>
						<v-card-title
							class="
								text-sm-h6
								primary--text
								font-weight-bold
								text-md-h5
								flex-grow-1
							"
						>
							<v-icon class="mx-2" color="primary">{{ info.icon }}</v-icon>
							{{ info.text }}
						</v-card-title>
					</v-card>
				</v-col>
			</v-row>
			<v-row>
				<h1
					class="
						primary--text
						mb-8
						text-sm-h4 text-pre-line text-md-h3
						font-weight-bold
					"
				>
					{{ $t('contactUs.location') }}
				</h1>
			</v-row>
			<v-row>
				<v-col>
					<v-card height="420">
						<iframe
							src="https://www.google.com/maps/embed?pb=!1m21!1m12!1m3!1d115995.90431042519!2d46.612038047079956!3d24.69692614932947!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m6!3e6!4m0!4m3!3m2!1d24.697027!2d46.68226!5e0!3m2!1sen!2s!4v1635424139985!5m2!1sen!2s"
							width="100%"
							height="100%"
							style="border: 0"
							allowfullscreen=""
							loading="lazy"
						></iframe>
					</v-card>
				</v-col>
			</v-row>
			<h1
				class="
					primary--text
					mb-8
					text-sm-h4 text-pre-line text-md-h3
					font-weight-bold
				"
			>
				{{ $t('contactUs.message') }}
			</h1>
			<!-- <v-row> -->
			<generic-form>
				<!-- prettier-ignore -->
				<template v-slot:title>{{ $t('careers.info') }}</template>
				<template v-slot:image>
					<v-img
						:class="$i18n.locale === 'en' ? 'rounded-r-lg' : 'rounded-l-lg'"
						class="py-0"
						height="750"
						src="/contact-us-form.webp"
						alt=""
					/>
				</template>
			</generic-form>
			<!-- </v-row> -->
		</div>
	</div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class extends Vue {
	get infos() {
		return this.$t('contactUs.contact');
	}
}
</script>

<style scoped></style>
