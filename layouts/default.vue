<template>
	<v-app>
		<!-- Header -->
		<v-app-bar height="80%" class="px-4" color="white">
			<v-row align-content="center" align="center" style="flex-wrap: nowrap">
				<v-btn to="/" text color="white"
					><img
						height="80"
						class="d-inline-block"
						src="/alraedah-logo.svg"
						alt="alraedah logo"
				/></v-btn>
				<v-spacer></v-spacer>
				<v-list class="d-flex flex-nowrap nav-list" style="align-items: center">
					<v-btn
						:to="localeRoute('/')"
						text
						dense
						small
						class="
							primary--text
							py-5
							text-lg-body-1 text-md-body-2 text-sm-caption text-capitalize
							mr-0 mr-md-2
							font-weight-bold
						"
						color="primary"
						>{{ $t('header.home') }}</v-btn
					>
					<v-menu
						:nudge-left="$i18n.locale === 'en' ? 52 : 95"
						open-on-hover
						nudge-bottom="30"
						style="position: relative; z-index: 20"
					>
						<template v-slot:activator="{ on, attrs }">
							<v-btn
								v-bind="attrs"
								v-on="on"
								text
								small
								:to="localeRoute('/products')"
								class="
									primary--text
									py-5
									text-lg-body-1 text-md-body-2 text-sm-caption text-capitalize
									mr-0 mr-md-2
									font-weight-bold
								"
								color="primary"
								>{{ $t('header.products') }}</v-btn
							>
						</template>
						<v-list>
							<v-list-item-group>
								<v-list-item
									:to="localeRoute(product.link)"
									v-for="(product, index) in products"
									:key="index"
								>
									<v-list-item-title
										class="
											primary--text
											text-lg-body-1 text-md-body-2 text-sm-caption
										"
										>{{ product.name }}</v-list-item-title
									>
								</v-list-item>
							</v-list-item-group>
						</v-list>
					</v-menu>
					<v-btn
						dense
						text
						small
						class="
							primary--text
							py-5
							text-lg-body-1 text-md-body-2 text-sm-caption text-capitalize
							mr-0 mr-md-2
							font-weight-bold
						"
						color="primary"
						>{{ $t('header.solutions') }}</v-btn
					>
					<v-btn
						dense
						text
						small
						:to="localeRoute('/careers')"
						class="
							primary--text
							py-5
							text-lg-body-1 text-md-body-2 text-sm-caption text-capitalize
							mr-0 mr-md-2
							font-weight-bold
						"
						color="primary"
						>{{ $t('header.careers') }}</v-btn
					>
					<v-menu
						:nudge-left="$i18n.locale === 'en' ? 36 : 7"
						open-on-hover
						nudge-bottom="28"
						style="position: relative; z-index: 20"
					>
						<template v-slot:activator="{ on, attrs }">
							<v-btn
								v-bind="attrs"
								v-on="on"
								text
								small
								:to="localeRoute('/about-us')"
								class="
									primary--text
									py-5
									text-lg-body-1 text-md-body-2 text-sm-caption text-capitalize
									mr-0 mr-md-2
									font-weight-bold
								"
								color="primary"
								>{{ $t('header.aboutUs') }}</v-btn
							>
						</template>
						<v-list>
							<v-list-item
								:to="localeRoute(item.link)"
								v-for="(item, index) in about"
								:key="index"
							>
								<v-list-item-title
									class="
										primary--text
										text-lg-body-1 text-md-body-2 text-sm-caption
									"
									>{{ item.title }}</v-list-item-title
								>
							</v-list-item>
						</v-list>
					</v-menu>
					<div class="mx-3">
						<apply-now-button
							:buttonTextColor="'#1D4283'"
							:buttonWidth="'10vw'"
							:buttonColor="'#ffffff'"
							:buttonText="$i18n.locale === 'ar' ? 'قدّم' : 'Apply'"
							:buttonFontSize="'16px'"
						/>
					</div>
					<img
						@click="setLang($i18n.locale === 'ar' ? 'en' : 'ar')"
						height="20"
						style="cursor: pointer"
						class="d-inline-block mx-md-4"
						src="/language.svg"
						alt=""
					/>

					<img height="20" src="/search.svg" alt="alraedah logo" class="mx-3" />
				</v-list>
				<img
					@click.stop="triggerDrawer"
					class="burger mx-4"
					src="/list.svg"
					color="primary"
					alt=""
				/>
			</v-row>
		</v-app-bar>
		<!-- Mobile Side-bar -->
		<v-navigation-drawer v-model="drawer" absolute left temporary>
			<v-list nav dense>
				<v-list-item-group
					active-class="primary--text "
					class="text-subtitle-1"
				>
					<v-list-item :to="localeRoute('/')">
						<v-list-item-icon>
							<v-icon>mdi-home-variant-outline</v-icon>
						</v-list-item-icon>
						<v-list-item-title class="text-subtitle-1 primary--text"
							>Home</v-list-item-title
						>
					</v-list-item>

					<v-list-item :to="localeRoute('/products')">
						<v-list-item-icon>
							<v-icon>mdi-folder-star-multiple-outline</v-icon>
						</v-list-item-icon>
						<v-list-item-title class="text-subtitle-1"
							>Products</v-list-item-title
						>
					</v-list-item>

					<v-list-item>
						<v-list-item-icon>
							<v-icon>mdi-toolbox-outline</v-icon>
						</v-list-item-icon>
						<v-list-item-title class="text-subtitle-1"
							>Solutions</v-list-item-title
						>
					</v-list-item>

					<v-list-item :to="localeRoute('/careers')">
						<v-list-item-icon>
							<v-icon>mdi-clipboard-edit-outline</v-icon>
						</v-list-item-icon>
						<v-list-item-title class="text-subtitle-1"
							>Careers</v-list-item-title
						>
					</v-list-item>

					<v-list-item :to="localeRoute('/about-us')">
						<v-list-item-icon>
							<v-icon>mdi-information-outline</v-icon>
						</v-list-item-icon>
						<v-list-item-title class="text-subtitle-1"
							>About us</v-list-item-title
						>
					</v-list-item>
				</v-list-item-group>
			</v-list>
		</v-navigation-drawer>
		<v-btn
			v-scroll="onScroll"
			v-show="fab"
			fab
			dark
			fixed
			bottom
			right
			color="primary"
			@click="toTop"
		>
			<v-icon>mdi-chevron-up</v-icon>
		</v-btn>
		<v-main>
			<!-- <v-container> -->
			<Nuxt />
			<!-- </v-container> -->
		</v-main>
		<footer>
			<v-container>
				<v-row
					class="d-flex flex-column flex-sm-row"
					style="align-items: center; text-align: center"
				>
					<v-col cols="6" sm="3">
						<v-img src="/alraedah-logo.svg"></v-img>
						<p class="text-subtitle-2 accent--text">{{ $t('footer.moto') }}</p>
					</v-col>
					<v-col class="px-0" v-for="(link, i) in links" :key="i">
						<div>
							<v-btn
								:to="localeRoute(link.link)"
								text
								class="
									text-capitalize text-sm-caption text-md-body-1
									font-weight-bold
									px-2
								"
								>{{ link.name }}</v-btn
							>
						</div>
					</v-col>
				</v-row>
				<v-divider></v-divider>
				<v-row class="mt-6">
					<v-col
						class="text-center"
						cols="6"
						sm="3"
						v-for="location in locations"
						:key="location['1']"
					>
						<p class="font-weight-bold">{{ location['1'] }}</p>
						<p class="text-subtitle-2 mb-1">{{ location['2'] }}</p>
						<p class="text-subtitle-2 mb-1">{{ location['3'] }}</p>
						<p class="text-subtitle-2 mb-1">{{ location['4'] }}</p>
						<p
							class="
								text-subtitle-2
								mb-1
								primary--text
								text-decoration-underline
							"
						>
							{{ location['5'] }}
						</p>
					</v-col>
					<v-col class="text-center" cols="6" sm="3">
						<img class="mx-1" src="/facebook.svg" alt="" />
						<img class="mx-1" src="/instagram.svg" alt="" />
						<img class="mx-1" src="/twitter.svg" alt="" />
						<p class="text-subtitle-2 mt-3 mb-1">
							{{ $t('footer.contactCol.saudi') }}
						</p>
						<p class="text-subtitle-2 mb-1">
							{{ $t('footer.contactCol.tel') }}
						</p>
						<p class="text-subtitle-2 mb-1">
							{{ $t('footer.contactCol.time') }}
						</p>
					</v-col>
				</v-row>
				<p class="text-center pb-2 mt-4 font-weight-bold">
					&copy; {{ $t('footer.copyRight') }}
				</p>
			</v-container>
		</footer>
	</v-app>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class extends Vue {
	setLang(lang: 'ar' | 'en') {
		this.$i18n.setLocale(lang);

		// logs an event in analytics, can be seen in the console
		this.$fire.analytics.logEvent('select_content', {
			content_type: 'changeing locale',
		});
	}
	fab: boolean = false;
	onScroll(e: any) {
		if (typeof window === 'undefined') return;
		const top = window.pageYOffset || e.target.scrollTop || 0;
		this.fab = top > 20;
	}
	toTop() {
		this.$vuetify.goTo(0);
	}
	get products() {
		return this.$t('header.productsSubMenu');
	}
	drawer = false;
	get about() {
		return this.$t('header.about');
	}

	get links() {
		return this.$t('footer.nav');
	}
	get locations() {
		return this.$t('footer.addresses');
	}

	triggerDrawer() {
		this.drawer = !this.drawer;
	}
}
</script>

<style scoped>
.burger {
	display: none;
}

@media (max-width: 750px) {
	.burger {
		display: unset;
	}
	.nav-list {
		display: none !important;
	}
}
</style>
