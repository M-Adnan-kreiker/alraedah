<template>
	<main>
		<v-container fluid class="mx-0 px-0 mt-sm-n10 mt-lg-n13">
			<v-row align="center" class="">
				<v-col
					style="position: relative; z-index: 1"
					cols="12"
					sm="10"
					md="9"
					:class="
						$i18n.locale === 'en'
							? 'px-l pl-sm-10 pl-lg-14'
							: 'px-r pr-sm-10 pr-lg-14 pl-0'
					"
					class="text-col d-flex flex-column main-col pt-6 pt-sm-14 pt-md-12"
				>
					<!-- prettier-ignore -->
					<h1
	
						:class="$i18n.locale === 'ar' ? 'line-height-h1 padding-l' : ''"

						class="
							primary--text
							text-pre-line
							font-weight-bold
							center-text
							text-md-h1
			        main-text
						"
					
					><span
					
					>{{ $t('landingPage.title') }}</span>
					</h1>
					<p
						:class="$i18n.locale === 'ar' ? 'line-height' : ''"
						style="width: 60%"
						class="
							info--text
							text-wrap
							mx-0
							my-6 my-sm-4 my-md-8
							center-text
							px-8 px-sm-0
							sub-main-text
						"
					>
						{{ $t('landingPage.text') }}
					</p>
					<div
						style="position: relative; z-index: 1"
						class="apply-button my-auto"
					>
						<apply-now-button-home-page
							:buttonText="$t('applyButton')"
							class="mb-md-4"
						></apply-now-button-home-page>
					</div>
				</v-col>
				<v-col cols="2" md="3" class="d-none px-0 d-sm-inline">
					<img
						height="630"
						width="422"
						:style="
							$i18n.locale === 'ar'
								? 'transform: scaleX(-1);float: left'
								: 'float: right'
						"
						src="/banner.webp"
						class="mt-6"
						:class="
							$i18n.locale === 'ar' ? 'ml-n16 ml-md-n12' : 'mr-n12 mr-md-0'
						"
					/>
				</v-col>
			</v-row>
		</v-container>
	</main>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class extends Vue {}
</script>

<style scoped>
h1,
p {
	white-space: nowrap;
}

@media (max-width: 599px) {
	main {
		background-image: none !important;
		padding-bottom: 10px !important;
	}
	p {
		width: 70% !important;
		margin-right: auto;
		margin-left: auto;
	}
	.apply-button {
		margin: 0 auto !important;
		display: flex;
		justify-content: center;
	}
	.sub-main-text {
		width: 100% !important;
	}
}

.line-height-h1 {
	line-height: 150% !important;
}
img {
	width: 104%;
	height: 104%;
	min-height: 470px;
	min-width: 330px;
	position: relative;
	z-index: 0;
}
.main-text {
	font-size: clamp(2.5rem, 9vw, 4.5rem);
}

p {
	font-size: clamp(1rem, 2vw, 1.5rem);
}
@media (min-width: 600px) {
	.main-col {
		min-height: 600px;
	}
}
.line-height {
	line-height: 170% !important;
}

@media (min-width: 821px) and (max-width: 882px) {
	.padding-l {
		padding-left: 30px;
	}
}
</style>
