<template>
	<div>
		<main class="mt-4 pb-8">
			<v-row class="mb-0 mb-md-8">
				<v-col
					:class="$i18n.locale === 'en' ? 'px-6 pl-sm-14' : 'px-6 pr-sm-14'"
					cols="12"
					sm="7"
					class="text-col mt-8"
				>
					<!-- prettier-ignore -->
					<h1
						class="
							primary--text
							text-pre-line text-h3 text-md-h2 text-lg-h1
							font-weight-bold
							center-text
							mt-sm-8
						"
					>{{ $t('productsPage.title') }}
					</h1>
					<p
						class="
							info--text
							text-pre-line text-body-1 text-wrap text-md-h6
							my-4 my-sm-8
							px-8 px-sm-0
							center-text
						"
					>
						{{ $t('productsPage.text') }}
					</p>
					<div class="apply-button"></div>
				</v-col>
				<v-col
					:class="$i18n.locale === 'en' ? 'pr-8' : 'pl-8'"
					cols="12"
					sm="5"
					class="d-none mt-8 px-0 d-sm-block"
				>
					<v-img class="mt-8" contain src="/POS.webp" alt=""> </v-img>
				</v-col>
			</v-row>
			<!-- <section class="mx-auto" style="width: 90%">
				<div>
					<product-card
						:marginColumn="'40px 20px'"
						:products="products"
					></product-card>
				</div>
			</section> -->
		</main>
		<v-row>
			<v-col>
				<h1
					class="
						primary--text
						text-h4 text-md-h4 text-lg-h2
						font-weight-bold
						mx-12
						center-text
						mt-sm-8
					"
				>
					{{ $t('ourProducts') }}
				</h1>
			</v-col>
		</v-row>
		<v-row class="px-2 px-sm-4 mb-16">
			<v-col cols="12" md="6" v-for="product in products" :key="product.title">
				<v-card
					elevation="4"
					class="mx-auto rounded-xl my-12 d-flex flex-column"
					max-width="600"
					height="100%"
				>
					<v-img max-height="300" :src="product.image"></v-img>
					<v-card-title
						class="primary--text font-weight-bold text-md-h5 flex-grow-1"
						>{{ product.name }}</v-card-title
					>
					<v-card-text>
						<div class="accent--text text-body-1 flex-grow-1">
							{{ product.info }}
						</div>
					</v-card-text>
					<v-divider class="mx-4"></v-divider>
					<v-card-title
						class="primary--text pb-0 font-weight-bold flex-grow-1"
						>{{ $t('features') }}</v-card-title
					>
					<v-card-text class="d-flex flex-row flex-wrap pb-0 flex-grow-1">
						<v-chip-group v-for="info in product.card.info" :key="info">
							<v-chip class="text-subtitle-2 text-sm-body-1 text-wrap">{{
								info
							}}</v-chip>
						</v-chip-group>
					</v-card-text>
					<v-card-actions class="px-4 pb-4 flex-grow-1">
						<apply-now-button
							:buttonPadding="'26px 20px'"
							:buttonWidth="'150px'"
							:buttonColor="'#1D4283'"
							:buttonText="$i18n.locale === 'ar' ? 'قدّم' : 'Apply'"
							:buttonFontSize="'16px'"
						></apply-now-button>
						<v-btn
							:to="localeRoute(product.link)"
							x-large
							outlined
							class="rounded-lg mx-4 text-body-1 text-capitalize"
							color="secondary"
							>{{ $t('detailsButton') }}</v-btn
						>
					</v-card-actions>
				</v-card>
			</v-col>
		</v-row>
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
