<template>
	<div>
		<main class="mt-4 pb-8">
			<v-row>
				<v-col
					:class="$i18n.locale === 'en' ? 'px-6 pl-sm-14' : 'px-6 pr-sm-14'"
					cols="12"
					sm="7"
					class="text-col"
				>
					<h1
						class="
							primary--text
							text-pre-line text-h3 text-md-h2 text-lg-h1
							font-weight-bold
							center-text
						"
					>
						{{ $t('productsPage.title') }}
					</h1>
					<p
						class="
							info--text
							text-pre-line text-body-1 text-wrap text-md-h6
							my-8
							center-text
						"
					>
						{{ $t('productsPage.text') }}
					</p>
					<div class="apply-button"></div>
				</v-col>
				<v-col cols="12" sm="5" class="d-none mt-8 px-0 d-sm-block">
					<v-img contain src="/pos-bg.png" alt=""> </v-img>
				</v-col>
			</v-row>
			<section class="mx-auto" style="width: 90%">
				<div>
					<product-card
						:marginColumn="'40px 0'"
						:products="products"
					></product-card>
				</div>
			</section>
		</main>
	</div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class extends Vue {
	products = this.$t('products');
}
</script>

<style scoped>
html {
	background: linear-gradient(
			51.66deg,
			rgba(238, 238, 238, 0.2) 75.46%,
			rgba(0, 0, 0, 0.2) 96.37%
		),
		#ffffff;
}
</style>
