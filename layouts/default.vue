<template>
	<v-app>
		<!-- Header -->
		<v-app-bar
			style="position: absolute; z-index: 10"
			height="80%"
			class="px-4"
			color="white"
			elevation="2"
		>
			<v-row align-content="center" align="center" style="flex-wrap: nowrap">
				<v-btn :to="localeRoute('/')" text color="white"
					><img
						height="80"
						class="d-inline-block"
						src="/alraedah-logo.svg"
						alt="alraedah logo"
				/></v-btn>
				<v-spacer></v-spacer>
				<v-list
					id="nav-list"
					class="d-flex flex-nowrap"
					style="align-items: center"
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
							py-5
							rounded-0
							text-lg-body-1 text-md-body-2 text-sm-caption text-capitalize
							mr-0 mr-md-2
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
							text-lg-body-1 text-md-body-2 text-sm-caption text-capitalize
							mr-0 mr-md-2
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
							rounded-0
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
						nuxt
						exact-active-class="active"
						small
						:to="localeRoute('/careers')"
						class="
							primary--text
							py-5
							rounded-0
							text-lg-body-1 text-md-body-2 text-sm-caption text-capitalize
							mr-0 mr-md-2
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
					<div>
						<v-btn
							@click="openDialog"
							dense
							:class="$i18n.locale === 'en' ? 'mr-4 ml-2' : 'ml-1 mr-2'"
							class="
								text-lg-body-1 text-md-body-2
								font-weight-bold
								white--text
								text-capitalize
								rounded-lg
								px-sm-4 px-md-8
								py-6
								mx-0
								apply-btn
							"
							to="#"
							color="primary"
							active-class="no-active"
						>
							{{ $t('applyButtonHeader') }}
						</v-btn>
					</div>
					<img
						@click="setLang($i18n.locale === 'ar' ? 'en' : 'ar')"
						height="20"
						style="cursor: pointer"
						class="d-inline-block mx-md-4"
						src="/language.svg"
						alt=""
					/>

					<img height="20" src="/search.svg" alt="alraedah logo" class="mx-2" />
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
							<v-icon>mdi-home-variant-outline</v-icon>
						</v-list-item-icon>
						<v-list-item-title class="text-subtitle-1">{{
							$t('header.home')
						}}</v-list-item-title>
					</v-list-item>

					<v-list-item
						exact-active-class="primary lighten-2 white--text"
						:to="localeRoute('/products')"
					>
						<v-list-item-icon>
							<v-icon>mdi-folder-star-multiple-outline</v-icon>
						</v-list-item-icon>
						<v-list-item-title class="text-subtitle-1">{{
							$t('header.products')
						}}</v-list-item-title>
					</v-list-item>
					<v-list-item
						exact-active-class="primary lighten-2 white--text"
						:to="localeRoute('/pricing')"
					>
						<v-list-item-icon>
							<v-icon>mdi-cash-multiple</v-icon>
						</v-list-item-icon>
						<v-list-item-title class="text-subtitle-1">{{
							$t('header.pricing')
						}}</v-list-item-title>
					</v-list-item>

					<v-list-item exact-active-class="primary lighten-2 white--text">
						<v-list-item-icon>
							<v-icon>mdi-toolbox-outline</v-icon>
						</v-list-item-icon>
						<v-list-item-title class="text-subtitle-1">{{
							$t('header.solutions')
						}}</v-list-item-title>
					</v-list-item>

					<v-list-item
						exact-active-class="primary lighten-2 white--text"
						:to="localeRoute('/careers')"
					>
						<v-list-item-icon>
							<v-icon>mdi-clipboard-edit-outline</v-icon>
						</v-list-item-icon>
						<v-list-item-title class="text-subtitle-1">{{
							$t('header.careers')
						}}</v-list-item-title>
					</v-list-item>

					<v-list-item
						exact-active-class="primary lighten-2 white--text"
						:to="localeRoute('/about-us')"
					>
						<v-list-item-icon>
							<v-icon>mdi-information-outline</v-icon>
						</v-list-item-icon>
						<v-list-item-title class="text-subtitle-1">{{
							$t('header.aboutUs')
						}}</v-list-item-title>
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
			<!-- <v-container> -->
			<Nuxt />
			<!-- </v-container> -->
		</v-main>
		<footer>
			<v-container>
				<v-row
					class="d-flex flex-column flex-sm-row mb-4"
					style="align-items: center; text-align: center"
				>
					<v-col cols="6" sm="2">
						<v-img src="/alraedah-logo.svg"></v-img>
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
								"
								>{{ link.name }}</v-btn
							>
						</div>
					</v-col>
				</v-row>
				<v-divider></v-divider>
				<v-row align="center" justify="center" class="mt-6">
					<v-col
						class="text-center px-0"
						cols="6"
						sm="3"
						v-for="location in locations"
						:key="location['1']"
					>
						<p class="font-weight-bold">{{ location['1'] }}</p>
						<p class="text-subtitle-2 mb-1">{{ location['2'] }}</p>
						<p class="text-subtitle-2 mb-1">{{ location['2'] }}</p>
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
					<v-dialog v-model="dialog" max-width="600">
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
							><img class="mx-1" src="/linkedin.svg" alt=""
						/></a>
						<a
							href="https://www.instagram.com/alraedah.finance.sa/?hl=en"
							target="_"
							><img class="mx-1" src="/instagram.svg" alt=""
						/></a>
						<a href="https://twitter.com/alraedahfinance" target="_"
							><img class="mx-1" src="/twitter.svg" alt=""
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

@Component
export default class extends Vue {
	mounted() {
		const tracker = new OpenReplay({
			projectKey: 'ptApJJm32giY5X4e0tSU',
		});
		tracker.start();
		// if (!this.$store.state.modules.leads.openreplayInit) {
		// 	this.$store.commit('modules/leads/setOpenreplay');
		// 	console.log('openreplay has been initialized');
		// } else console.log('openreplay has already been initialized');
	}
	created() {
		this.$nuxt.$on('trigger-dialog', () => {
			this.modal = !this.modal;
		});
	}
	map = '';
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
	openDialog() {
		this.$nuxt.$emit('trigger-dialog');
	}
	modal = false;
	dialog = false;
	closeMap() {
		this.dialog = false;
	}
	// befoprimary lighten-2 white--textestroy() {
	// 	this.$nuxt.$off('trigger-dialog');
	// }
}
</script>

<style scoped>
.burger {
	display: none;
}

@media (max-width: 825px) {
	.burger {
		display: unset !important;
	}
	#nav-list {
		display: none !important;
	}
}
.apply-btn {
	border: 1px solid #1d4283;
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
</style>
