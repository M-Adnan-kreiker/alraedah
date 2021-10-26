<template>
	<div>
		<v-row justify="center">
			<v-col
				:style="styles"
				class="columns"
				cols="12"
				v-for="product in products"
				:key="product.id"
			>
				<div class="mx-auto">
					<v-row>
						<v-col
							:order="$vuetify.breakpoint.sm ? 3 : 2"
							cols="12"
							md="6"
							class="pa-0"
						>
							<v-img
								:class="$i18n.locale === 'en' ? 'rounded-r-lg' : 'rounded-l-lg'"
								class="mx-3 mx-md-0"
								:src="product.image"
								max-height="516"
								min-height="431"
								style="object-fit: cover"
							></v-img>
						</v-col>
						<v-col order="1" cols="12" md="6" class="d-flex flex-column">
							<v-card-title
								class="
									primary--text
									text-h5 text-md-h5
									py-md-0
									text-lg-h4
									font-weight-bold
									mt-sm-2
									mx-2
								"
							>
								{{ product.name }}
							</v-card-title>
							<v-card-text
								class="
									info--text
									py-md-0
									mx-2
									mt-auto
									text-body-1 text-md-body-2 text-lg-body-1
								"
							>
								{{ product.info }}
							</v-card-text>
							<v-card-text
								class="
									primary--text
									pb-md-2
									mt-auto
									mx-2
									text-h6 text-lg-h5
									font-weight-bold
								"
								>{{ $t('howItWorks') }}</v-card-text
							>
							<v-card-text class="py-md-0">
								<ul
									v-for="(guide, i) in product.guides"
									:key="i"
									class="info--text px-4"
								>
									<li class="text-md-body-2 text-lg-body-1 pt-lg-1">
										{{ guide }}
									</li>
								</ul>
							</v-card-text>
							<v-card-actions class="mx-4 py-md-0 mt-auto">
								<apply-now-button
									:buttonPadding="'26px 20px'"
									:buttonWidth="'150px'"
									:buttonColor="'#1D4283'"
									:buttonText="$i18n.locale === 'ar' ? 'قدّم' : 'Apply'"
									:buttonFontSize="'16px'"
								></apply-now-button>
								<v-btn
									v-if="showButton"
									:to="localeRoute(product.link)"
									x-large
									outlined
									class="rounded-lg mx-4 text-body-1 text-capitalize"
									color="secondary"
									>{{ $t('detailsButton') }}</v-btn
								>
							</v-card-actions>
						</v-col>
					</v-row>
				</div>
			</v-col>
		</v-row>
	</div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class extends Vue {
	@Prop(Array) products!: [];
	@Prop(String) marginColumn!: string;
	get margin() {
		return this.marginColumn;
	}

	styles = {
		'--margin': this.marginColumn,
	};
	get showButton() {
		if (
			this.$route.name === 'products___ar' ||
			this.$route.name === 'products___en'
		)
			return true;
	}
	mounted() {
		console.log(this.$route.name);
	}
}
</script>

<style scoped>
div > .v-row > .v-col {
	margin: 0 !important;
}
.columns {
	margin: var(--margin) !important;
}
</style>
