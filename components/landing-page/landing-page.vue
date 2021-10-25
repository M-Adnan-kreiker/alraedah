<template>
	<main>
		<v-container fluid class="mx-0 px-0 mt-sm-n6 mt-md-n10">
			<v-row class="row" style="max-height: 600px">
				<v-col
					style="position: relative; z-index: 10; height: 100%"
					cols="12"
					sm="9"
					:class="$i18n.locale === 'en' ? 'px-l pl-sm-14' : 'px-r pr-sm-14'"
					class="text-col"
				>
					<!-- text-h2 text-md-h1 text-lg-h1 -->
					<h1
						class="
							primary--text
							text-pre-line
							font-weight-bold
							center-text
							mt-n16 mt-sm-n10
							text-md-h1
						"
						style="font-size: clamp(2.8rem, 6vmin, 4.5rem)"
					>
						{{ $t('landingPage.title') }}
					</h1>
					<p
						style="width: 60%"
						class="
							info--text
							text-wrap text-body-1 text-md-h6
							mx-0
							my-6 my-sm-4 my-md-8
							center-text
							px-8 px-sm-0
							sub-main-text
						"
					>
						{{ $t('landingPage.text') }}
					</p>
					<div class="apply-button mb-8">
						<apply-now-button
							class="btn"
							:buttonWidth="'max(20vw, 200px)'"
							:buttonColor="'#1D4283'"
							:buttonPadding="'clamp(26px, 8vw, 32px )'"
							:buttonText="$i18n.locale === 'ar' ? 'قدّم الآن' : 'Apply Now'"
						></apply-now-button>
					</div>
				</v-col>
				<v-col cols="3" class="d-none px-0 d-sm-block">
					<img
						:style="
							$i18n.locale === 'ar'
								? 'transform: scaleX(-1);float: left'
								: 'float: right'
						"
						src="/banner2.png"
						class="mt-4"
						height="50%"
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

@media (max-width: 960px) {
	img {
		height: 40%;
	}
	.row {
		max-height: 500px !important;
	}
}

@media (max-width: 599px) {
	main {
		background-image: none !important;
		padding-bottom: 10px !important;
	}
	p {
		width: 80% !important;
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
</style>
