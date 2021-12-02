<template>
	<v-app class="hero">
		<!-- Header -->
		<v-app-bar
			style="position: absolute; z-index: 10"
			height="80%"
			color="white"
			elevation="2"
		>
			<v-row align-content="center" align="center" style="flex-wrap: nowrap">
				<v-btn :to="localeRoute('/')" text color="white"
					><img
						height="80"
						width="160"
						class="d-inline-block"
						src="/alraedah-logo.svg"
						alt="alraedah logo"
				/></v-btn>
				<v-spacer></v-spacer>
				<v-list
					id="nav-list"
					class="d-flex flex-row flex-nowrap"
					style="align-items: center; width: 80%; justify-content: space-evenly"
				>
					<v-btn
						:to="localeRoute('/')"
						text
						nuxt
						exact
						dense
						small
						class="
							primary--text
							rounded-0
							px-0
							py-5
							text-body-2 text-lg-body-1
							px-2
							text-capitalize
							font-weight-bold
						"
						color="primary"
						exact-active-class="active"
						>{{ $t('header.home') }}</v-btn
					>
					<dropdown-menu
						route="/products"
						:text="$t('header.products')"
						:items="products"
					></dropdown-menu>

					<v-btn
						:to="localeRoute('/pricing')"
						text
						nuxt
						exact-active-class="active"
						dense
						small
						class="
							primary--text
							py-5
							rounded-0
							px-0
							text-body-2 text-lg-body-1
							px-2
							text-capitalize
							font-weight-bold
						"
						color="primary"
						>{{ $t('header.pricing') }}</v-btn
					>
					<v-btn
						dense
						text
						exact-active-class="active"
						small
						class="
							primary--text
							py-5
							px-0
							rounded-0
							text-body-2 text-lg-body-1
							px-2
							text-capitalize
							font-weight-bold
						"
						color="primary"
						>{{ $t('header.solutions') }}</v-btn
					>
					<v-btn
						dense
						text
						nuxt
						exact-active-class="active"
						small
						:to="localeRoute('/careers')"
						class="
							primary--text
							py-5
							px-0
							rounded-0
							text-body-2 text-lg-body-1
							px-2
							text-capitalize
							font-weight-bold
						"
						color="primary"
						>{{ $t('header.careers') }}</v-btn
					>
					<dropdown-menu
						route="/about-us"
						:text="$t('header.aboutUs')"
						:items="about"
					></dropdown-menu>
					<div class="d-flex px-2 justify-center">
						<v-btn
							@click="openDialog"
							dense
							class="
								text-lg-body-1 text-md-body-2
								font-weight-bold
								white--text
								text-capitalize
								rounded-lg
								px-sm-4 px-md-8
								py-6
							"
							to="#"
							color="primary"
							active-class="no-active"
						>
							{{ $t('applyButtonHeader') }}
						</v-btn>
					</div>
					<div>
						<img
							@click="setLang($i18n.locale === 'ar' ? 'en' : 'ar')"
							height="20"
							width="35"
							style="cursor: pointer"
							class="d-block px-2 mx-auto"
							src="/language.svg"
							alt="change language button"
						/>
					</div>

					<div>
						<img
							height="20"
							width="35"
							srcset="/search.svg"
							src="/search.svg"
							class="d-block px-2 mx-auto"
							alt="search button"
						/>
					</div>
				</v-list>
				<img
					@click.stop="triggerDrawer"
					class="burger mx-4"
					src="/list.svg"
					color="primary"
					alt=""
					height="25"
				/>
			</v-row>
		</v-app-bar>
		<!-- Mobile Side-bar -->
		<v-navigation-drawer
			style="z-index: 30"
			v-model="drawer"
			absolute
			left
			temporary
			width="280px"
		>
			<v-list nav dense>
				<v-list-item-group
					active-class="no"
					exact-active-class="primary lighten-2 white--text"
					class="text-subtitle-1"
				>
					<v-list-item
						exact-active-class="primary lighten-2 white--text"
						:to="localeRoute('/')"
					>
						<v-list-item-icon>
							<v-icon>{{ mdiHomeVariantOutline }}</v-icon>
						</v-list-item-icon>
						<v-list-item-title class="text-subtitle-1 py-4">{{
							$t('header.home')
						}}</v-list-item-title>
					</v-list-item>
					<v-list-group
						:value="false"
						:prepend-icon="mdiShopping"
						:append-icon="mdiChevronDown"
					>
						<template v-slot:activator>
							<v-list-item-title
								class="text-subtitle-1 py-4"
								exact-active-class="primary lighten-2 white--text"
							>
								{{ $t('header.products') }}
							</v-list-item-title>
						</template>
						<v-list-item
							:to="localeRoute('/products')"
							exact-active-class="primary lighten-2 white--text"
						>
							<v-list-item-title class="text-subtitle-2 mx-14">
								{{ $t('allProducts') }}
							</v-list-item-title>
						</v-list-item>
						<v-list-item
							v-for="product in products"
							:key="product.title"
							:to="localeRoute(product.link)"
							exact-active-class="primary lighten-2 white--text"
						>
							<v-list-item-title class="text-subtitle-2 mx-14">
								{{ product.title }}
							</v-list-item-title>
						</v-list-item>
					</v-list-group>
					<v-list-item
						exact-active-class="primary lighten-2 white--text"
						:to="localeRoute('/pricing')"
					>
						<v-list-item-icon>
							<v-icon>{{ mdiCashMultiple }}</v-icon>
						</v-list-item-icon>
						<v-list-item-title class="text-subtitle-1 py-4">{{
							$t('header.pricing')
						}}</v-list-item-title>
					</v-list-item>

					<v-list-item exact-active-class="primary lighten-2 white--text">
						<v-list-item-icon>
							<v-icon>{{ mdiLightbulbOnOutline }}</v-icon>
						</v-list-item-icon>
						<v-list-item-title class="text-subtitle-1 py-4">{{
							$t('header.solutions')
						}}</v-list-item-title>
					</v-list-item>

					<v-list-item
						exact-active-class="primary lighten-2 white--text"
						:to="localeRoute('/careers')"
					>
						<v-list-item-icon>
							<v-icon>{{ mdiClipboardEditOutline }}</v-icon>
						</v-list-item-icon>
						<v-list-item-title class="text-subtitle-1 py-4">{{
							$t('header.careers')
						}}</v-list-item-title>
					</v-list-item>
					<v-list-group
						:value="false"
						:prepend-icon="mdiWeb"
						:append-icon="mdiChevronDown"
					>
						<template v-slot:activator>
							<v-list-item-title class="text-subtitle-1 py-4">{{
								$t('language')
							}}</v-list-item-title>
						</template>
						<v-list-item exact-active-class="primary lighten-2 white--text">
							<v-list-item-title
								@click="setLang('ar')"
								class="text-subtitle-2 mx-14"
								>العربية
							</v-list-item-title>
						</v-list-item>
						<v-list-item exact-active-class="primary lighten-2 white--text">
							<v-list-item-title
								@click="setLang('en')"
								class="text-subtitle-2 mx-14"
								>English</v-list-item-title
							>
						</v-list-item>
					</v-list-group>
					<v-list-group
						:value="false"
						:prepend-icon="mdiInformationOutline"
						:append-icon="mdiChevronDown"
					>
						<template v-slot:activator>
							<v-list-item-title
								class="text-subtitle-1 py-4"
								exact-active-class="primary lighten-2 white--text"
							>
								{{ $t('header.aboutUs') }}
							</v-list-item-title>
						</template>
						<v-list-item
							:to="localeRoute('/about-us')"
							exact-active-class="primary lighten-2 white--text"
						>
							<v-list-item-title class="text-subtitle-2 mx-14">
								{{ $t('header.aboutUs') }}
							</v-list-item-title>
						</v-list-item>
						<v-list-item
							:to="localeRoute('/financial-reports')"
							exact-active-class="primary lighten-2 white--text"
						>
							<v-list-item-title class="text-subtitle-2 mx-14">
								{{ $t('financialReports.title') }}
							</v-list-item-title>
						</v-list-item>
					</v-list-group>
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
			<v-icon>{{ mdiChevronUp }}</v-icon>
		</v-btn>
		<v-main class="mt-14">
			<div :class="modal ? 'd-block' : 'd-none'" class="overlay">
				<transition name="fade" mode="out-in">
					<contact-form
						style="
							position: fixed;
							left: 50%;
							top: 50%;
							overflow-y: auto;
							transform: translate(-50%, -50%);
							width: 95vw;
							z-index: 100;
						"
						class="contact-form"
						v-if="modal"
					></contact-form>
				</transition>
			</div>
			<v-main>
				<Nuxt />
			</v-main>
		</v-main>
		<footer>
			<v-container>
				<v-row
					class="d-flex flex-column flex-sm-row mb-4"
					style="align-items: center; text-align: center"
				>
					<v-col cols="8" sm="2">
						<div>
							<v-img
								height="87"
								width="173"
								contain
								src="/alraedah-logo.svg"
								class="mx-auto my-4 my-sm-0 footer-logo"
							></v-img>
						</div>
						<p class="text-subtitle-2 accent--text">{{ $t('footer.moto') }}</p>
					</v-col>
					<v-col class="px-0" v-for="(link, i) in links" :key="i">
						<div>
							<v-btn
								:to="localeRoute(link.link)"
								text
								exact-active-class="active"
								nuxt
								class="
									text-capitalize text-sm-caption text-md-body-1
									font-weight-bold
									px-2
									rounded-0
								"
								>{{ link.name }}</v-btn
							>
						</div>
					</v-col>
				</v-row>
				<v-divider></v-divider>
				<v-row align="start" justify="center" class="mt-6">
					<v-col
						class="text-center px-0"
						cols="6"
						sm="3"
						v-for="location in locations"
						:key="location['1']"
					>
						<p class="font-weight-bold">{{ location['1'] }}</p>
						<p class="text-subtitle-2 mb-1">{{ location['2'] }}</p>
						<p class="text-subtitle-2 mb-1">{{ location['3'] }}</p>
						<p class="text-subtitle-2 mb-1">{{ location['4'] }}</p>
						<div
							class="
								text-subtitle-2
								mb-1
								primary--text
								text-decoration-underline
							"
						>
							<v-btn
								class="text-capitalize"
								text
								color="primary"
								dark
								@click.stop="[(dialog = true), (map = location['6'])]"
							>
								{{ location['5'] }}
							</v-btn>
						</div>
					</v-col>
					<v-dialog v-model="dialog" width="80%">
						<v-card class="rounded-lg">
							<iframe :src="map" width="100%" height="450"></iframe>
							<v-card-actions>
								<v-spacer></v-spacer>

								<v-btn color="primary" text @click="closeMap">
									{{ $t('closeButton') }}
								</v-btn>
							</v-card-actions>
						</v-card>
					</v-dialog>
					<v-col class="text-center" cols="6" sm="3">
						<a
							href="https://www.linkedin.com/company/alraedah-finance/"
							target="_"
							><img
								height="24"
								width="24"
								class="mx-1"
								src="/linkedin.svg"
								alt=""
						/></a>
						<a
							href="https://www.instagram.com/alraedah.finance.sa/?hl=en"
							target="_"
							><img
								height="24"
								width="24"
								class="mx-1"
								src="/instagram.svg"
								alt=""
						/></a>
						<a href="https://twitter.com/alraedahfinance" target="_"
							><img
								height="24"
								width="24"
								class="mx-1"
								src="/twitter.svg"
								alt=""
						/></a>
						<p class="text-subtitle-2 mt-2 mb-1">
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
import OpenReplay from '@openreplay/tracker/cjs';
import { localeChanged } from 'vee-validate';
import {
	mdiChevronUp,
	mdiHomeVariantOutline,
	mdiInformationOutline,
	mdiWeb,
	mdiClipboardEditOutline,
	mdiLightbulbOnOutline,
	mdiCashMultiple,
	mdiShopping,
	mdiChevronDown,
} from '@mdi/js';
import { NuxtOptionsHead } from '@nuxt/types/config/head';

@Component
export default class extends Vue {
	head(): NuxtOptionsHead {
		return {
			link: [
				{
					rel: 'preload',
					as: 'image',
					href: '/banner.webp',
				},
			],
		};
	}
	mdiChevronUp = mdiChevronUp;
	mdiHomeVariantOutline = mdiHomeVariantOutline;
	mdiInformationOutline = mdiInformationOutline;
	mdiWeb = mdiWeb;
	mdiClipboardEditOutline = mdiClipboardEditOutline;
	mdiLightbulbOnOutline = mdiLightbulbOnOutline;
	mdiCashMultiple = mdiCashMultiple;
	mdiShopping = mdiShopping;
	mdiChevronDown = mdiChevronDown;
	loaded = true;
	beforeCreate() {
		this.loaded = true;
	}
	mounted() {
		const tracker = new OpenReplay({
			projectKey: 'ptApJJm32giY5X4e0tSU',
		});
		tracker.start();
	}
	created() {
		this.$nuxt.$on('trigger-dialog', () => {
			this.modal = !this.modal;
		});
	}
	beforeDestroy() {
		this.$nuxt.$off('trigger-dialog');
	}
	reload() {
		window.location.reload(true);
	}
	map = '';
	setLang(lang: 'ar' | 'en') {
		this.$i18n.setLocale(lang);
		setTimeout(this.reload, 300);
		// window.location.reload(true);

		// this.$router.push(this.$route.path);
		// logs an event in analytics, can be seen in the console
		// this.$fire.analytics.logEvent('select_content', {
		// 	content_type: 'changeing locale',
		// });
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
	openDialog() {
		this.$nuxt.$emit('trigger-dialog');
	}
	modal = false;
	dialog = false;
	closeMap() {
		this.dialog = false;
	}
}
</script>

<style scoped>
.burger {
	display: none;
}
@media (max-width: 1040px) {
	.burger {
		display: unset !important;
	}
	#nav-list {
		display: none !important;
	}
}
.overlay {
	position: fixed;
	top: 0;
	left: 0;
	width: 100vw;
	z-index: 100;
	height: 100vh;
	overflow-y: hidden;
	background-color: rgba(128, 128, 128, 0.822);
}
@media (max-width: 600px) {
	.contact-form {
		height: 90%;
		width: 80%;
	}
}
.hero {
	background: url(/watermark2.jpg);
	background-size: 100%;
}

.footer-logo {
	height: 100% !important;
	max-height: 88px !important;
	max-width: 174px !important;

	width: 100% !important;
}
</style>
