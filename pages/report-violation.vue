<template>
	<div class="mx-4 mx-sm-8 mx-md-16 mt-16">
		<social-head
			:title="$t('seo.reportAMisconduct.title')"
			:description="$t('seo.reportAMisconduct.description')"
		></social-head>
		<v-row>
			<v-col cols="12" sm="9">
				<!-- prettier-ignore -->
				<h1
					class="
						primary--text
						text-sm-h4 text-pre-line text-md-h3
						font-weight-bold
						center-text
					"
				>{{ $t('report.title') }}
				</h1>
				<p
					class="
						info--text
						text-body-1 text-pre-line text-md-h6 text-h6
						center-text
					"
				>
					{{ $t('report.text') }}
				</p>
			</v-col>
		</v-row>
		<generic-form>
			<template v-slot:title> {{ $t('report.title') }} </template>
			<template v-slot:image>
				<v-img
					:class="$i18n.locale === 'en' ? 'rounded-r-xl' : 'rounded-l-xl'"
					class="py-0"
					height="750"
					src="/report.webp"
					alt=""
				/>
			</template>
		</generic-form>
	</div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class extends Vue {}
</script>

<style scoped></style>
