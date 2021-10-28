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
				>{{ $t('contactUs.title') }}</h1>
				<p class="info--text text-body-1 text-pre-line text-md-h6 text-h6">
					{{ $t('contactUs.text') }}
				</p>
			</v-col>
		</v-row>
		<v-row>
			<img width="100%" src="/contact-us2.webp" />
		</v-row>
		<v-row align="center" justify="center">
			<v-col v-for="info in infos" :key="info.title">
				<info-card class="mx-auto" :card="info">
					<template v-slot:title>
						<div>
							<span :class="$i18n.locale === 'en' ? 'pr-4' : 'pl-4'">{{
								info.title
							}}</span>
						</div>
					</template>
				</info-card>
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

		<generic-form>
			<template v-slot:title>
				{{ $t('careers.info') }}
			</template>

			<template v-slot:image>
				<v-img
					:class="$i18n.locale === 'en' ? 'rounded-r-lg' : 'rounded-l-lg'"
					class="py-0"
					height="100%"
					src="/contact-us-form.webp"
					alt=""
				/>
			</template>
		</generic-form>
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
