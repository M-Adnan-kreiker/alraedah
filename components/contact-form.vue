<template>
	<validation-observer ref="observer" v-slot="{ invalid }">
		<v-card rounded="" class="pa-md-4 pa-4 mx-auto">
			<v-form class="mx-auto">
				<div class="text-start mb-12">
					<h1 class="primary--text text-h5 text-sm-h4 font-weight-bold">
						{{ $t('contactForm.title') }}
					</h1>
				</div>
				<v-row>
					<v-col cols="12" md="8">
						<v-row>
							<v-col cols="12" sm="6" class="py-1 mb-0">
								<validation-provider
									v-slot="{ errors }"
									name="Name"
									rules="required|max:20"
								>
									<v-text-field
										v-model="fullName"
										:error-messages="errors"
										:label="$t('contactForm.fullname')"
										outlined
										class="my-0 pl-sm-3 py-0"
										type="text"
									></v-text-field>
								</validation-provider>
							</v-col>
							<v-col cols="12" sm="6" class="py-1 my-0 mt-n3">
								<validation-provider
									v-slot="{ errors }"
									name="email"
									rules="required|email"
								>
									<v-text-field
										v-model="email"
										:error-messages="errors"
										:label="$t('contactForm.email')"
										outlined
										class="pt-sm-3 pr-sm-3 my-0"
										type="email"
									></v-text-field>
								</validation-provider>
							</v-col>
						</v-row>
						<v-row class="mt-n3">
							<v-col cols="12" sm="6" class="py-1 ma-0">
								<validation-provider
									v-slot="{ errors }"
									name="phoneNumber"
									:rules="{
										required: true,
										digits: 10,
										regex:
											'^(050|051|058|059|054|056|058|059|0570|0571|0572|0576|)',
									}"
								>
									<v-text-field
										class="pl-sm-3"
										:error-messages="errors"
										v-model="mobile"
										:label="$t('contactForm.mobile')"
										outlined
										type="number"
									></v-text-field>
								</validation-provider>
							</v-col>

							<v-col class="py-1 ma-0" cols="12" sm="6">
								<validation-provider
									v-slot="{ errors }"
									name="select"
									rules="required"
								>
									<v-select
										v-model="contactTime"
										:error-messages="errors"
										class="pr-sm-3 mt-n3 mt-sm-0"
										:items="times"
										:label="$t('contactForm.contactTime')"
										outlined
									></v-select>
								</validation-provider>
							</v-col>
						</v-row>

						<v-col
							cols="12"
							sm="6"
							:class="$i18n.locale === 'en' ? 'px-sm-3' : 'pl-sm-6'"
							class="py-1 px-0"
						>
							<validation-provider
								v-slot="{ errors }"
								name="Company's name"
								rules="required|max:10"
							>
								<v-text-field
									v-model="companyName"
									:error-messages="errors"
									:label="$t('contactForm.company')"
									outlined
									class="px-0"
								></v-text-field>
							</validation-provider>
						</v-col>
						<v-row>
							<v-col class="d-flex py-1 align-content-center" cols="12" sm="8">
								<v-card-text
									class="mb-0 align-self-center py-0 pl-3 text-subtitle-1"
									name="commercialRegistration"
								>
									{{ $t('contactForm.registration') }}
								</v-card-text>
							</v-col>
							<v-col cols="12" sm="4" class="py-0 pl-6 pl-sm-0">
								<v-radio-group
									mandatory
									v-model="commercialRegistration"
									class="pt-2"
									row
								>
									<v-radio class="" :label="$t('yes')" value="true"></v-radio>
									<v-radio :label="$t('no')" value="false"></v-radio>
								</v-radio-group>
							</v-col>
						</v-row>
						<v-row>
							<v-col class="d-flex py-0 align-content-center" cols="12" sm="8">
								<v-card-text
									class="mb-0 py-1 pl-3 align-self-center text-subtitle-1"
									name="creditCard"
									>{{ $t('contactForm.creditCard') }}</v-card-text
								>
							</v-col>
							<v-col cols="12" sm="4" class="py-0 pl-6 pl-sm-0">
								<v-radio-group mandatory v-model="creditCard" class="pt-2" row>
									<v-radio :label="$t('yes')" value="true"></v-radio>
									<v-radio :label="$t('no')" value="false"></v-radio>
								</v-radio-group>
							</v-col>
						</v-row>

						<v-col cols="12" class="py-0">
							<v-checkbox v-model="tos">
								<template v-slot:label>
									<div>
										{{ $t('contactForm.agree') }}

										<v-tooltip bottom>
											<template v-slot:activator="{ on }">
												<a
													target="_blank"
													href="https://vuetifyjs.com"
													@click.stop
													v-on="on"
												>
													{{ $t('contactForm.tos') }}
												</a>
											</template>
											Opens in new window
										</v-tooltip>
									</div>
								</template>
							</v-checkbox>
						</v-col>
						<v-row>
							<v-col cols="5" sm="3" class="pb-0 pr-2">
								<v-btn
									@click.prevent="handleClick"
									width="100%"
									class="d-inline"
									x-large
									:disabled="invalid"
									color="secondary"
									>{{ $t('submitButton') }}</v-btn
								>
							</v-col>
							<v-col class="pb-2 pl-0" cols="3">
								<v-btn
									color="secondary"
									class="ml-1 px-4 d-inline"
									x-large
									outlined
									@click="closeDialog() + clear()"
								>
									{{ $t('closeButton') }}
								</v-btn>
							</v-col>
						</v-row>
					</v-col>
					<v-col class="d-none d-md-inline" cols="4">
						<h1 class="primary--text text-start text-h3 mb-6 font-weight-bold">
							{{ $t('contactForm.getStarted') }}
						</h1>
						<p class="text-h5 font-weight-bold text-start accent--text">
							{{ $t('contactForm.getFunding') }}
						</p>
						<div><img src="/alraedah-logo.svg" height="100%" alt="" /></div>
					</v-col>
				</v-row>
			</v-form>
		</v-card>
	</validation-observer>
</template>

<script lang="ts">
import { Component, Emit, Vue } from 'vue-property-decorator';
import { lead, VeeValidateObserverRef } from '~/types';
// import { required, digits, email, max, regex } from 'vee-validate/dist/rules';
// import {
// 	extend,
// 	ValidationObserver,
// 	ValidationProvider,
// 	setInteractionMode,
// } from 'vee-validate';
// setInteractionMode('lazy');

@Component({
	// components: {
	// 	ValidationProvider,
	// 	ValidationObserver,
	// },
})
export default class extends Vue {
	$refs!: {
		observer: VeeValidateObserverRef;
	};
	fullName: string = '';
	companyName: string = '';
	email: string = '';
	mobile: string = '';
	commercialRegistration: boolean = false;
	creditCard: boolean = false;
	tos: boolean = false;
	contactTime = '';
	times = [
		'8 am - 10 am',
		'10 am - 12 pm',
		'12 pm - 2 pm',
		'2 pm - 4 pm',
		'4 pm - 6 pm',
		'6 pm - 8 pm',
	];
	handleClick() {
		this.$refs.observer.validate();
		const leadInfo: lead = {
			name: this.fullName,
			email: this.email,
			phone: this.mobile,
			crAvailability: this.commercialRegistration,
			posAvailability: this.creditCard,
			contactTime: this.contactTime,
			source: this.$route.query.source,
		};
		// this.$store.commit('modules/leads/setLead', leadInfo);
		this.$store.dispatch('modules/leads/postForm', leadInfo);
		console.log('from form', leadInfo);
		console.log('ROUTER', this.$route.query.source);
	}
	@Emit()
	closeDialog() {}
	clear() {
		this.fullName = '';
		this.companyName = '';
		this.email = '';
		this.mobile = '';
		this.commercialRegistration = false;
		this.creditCard = false;
		this.tos = false;
		this.contactTime = '';
		this.$refs.observer.reset();
	}
}
</script>

<style scoped>
section {
	background: linear-gradient(
		180deg,
		rgba(29, 66, 131, 0.79) 0%,
		rgba(75, 130, 188, 0.53) 100%
	);
}
</style>
