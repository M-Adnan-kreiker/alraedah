<template>
	<div>
		<v-card
			max-width="1200"
			max-height="820"
			elevation="12"
			class="my-8 my-sm-16 rounded-lg py-3 mx-auto"
		>
			<validation-observer ref="observer">
				<v-form class="mx-auto px-2 py-2 pa-sm-0">
					<v-row>
						<v-col class="px-md-8" cols="12" sm="7">
							<div class="mb-12">
								<!-- prettier-ignore -->
								<h1
									id="title"
									class="
										primary--text
										mt-2
										mx-4
										text-h6 text-md-h5
										font-weight-bold
										text-pre-line
									"
								><slot name="title"></slot>
								</h1>
							</div>
							<v-col cols="12" class="py-0 mb-0">
								<validation-provider
									v-slot="{ errors }"
									name="Name"
									rules="required|max:20"
								>
									<v-text-field
										v-model="fullName"
										:error-messages="errors"
										:label="$t('genericForm.fullname')"
										outlined
										class="my-0 py-0"
										type="text"
									></v-text-field>
								</validation-provider>
							</v-col>
							<v-col cols="12" class="py-0 my-0 mt-n3">
								<validation-provider
									v-slot="{ errors }"
									name="email"
									rules="required|email"
								>
									<v-text-field
										v-model="email"
										:error-messages="errors"
										:label="$t('genericForm.email')"
										outlined
										class="pt-sm-3 my-0"
										type="email"
									></v-text-field>
								</validation-provider>
							</v-col>
							<v-col cols="12" class="py-0 ma-0">
								<validation-provider
									v-slot="{ errors }"
									name="phone number"
									mode="lazy"
									:rules="{
										required: true,
										digits: 10,
										regex:
											'^(050|051|058|059|054|056|058|059|0570|0571|0572|0576|)',
									}"
								>
									<v-text-field
										v-model="mobile"
										:error-messages="errors"
										data-openreplay-obscured
										:label="$t('genericForm.number')"
										outlined
										type="number"
									></v-text-field>
								</validation-provider>
							</v-col>
							<v-col cols="12" class="py-0 mb-0">
								<validation-provider
									v-slot="{ errors }"
									name="Subject"
									rules="required|max:20"
								>
									<v-text-field
										v-model="subject"
										:label="$t('genericForm.subject')"
										outlined
										:error-messages="errors"
										class="my-0 py-0"
										type="text"
									></v-text-field>
								</validation-provider>
							</v-col>
							<slot name="file"></slot>
							<v-col cols="12" class="py-0">
								<validation-provider
									v-slot="{ errors }"
									name="Message"
									rules="required|max:120"
								>
									<v-textarea
										v-model="message"
										:label="$t('genericForm.message')"
										outlined
										class=""
										:error-messages="errors"
									></v-textarea>
								</validation-provider>
							</v-col>
							<v-btn class="mx-3 mb-4" x-large color="primary">{{
								$t('submitButton')
							}}</v-btn>
						</v-col>
						<v-col class="d-none py-0 px-0 d-sm-block" cols="5">
							<slot name="image"></slot>
						</v-col>
					</v-row>
				</v-form>
			</validation-observer>
		</v-card>
	</div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class extends Vue {
	fullName: string = '';
	email: string = '';
	mobile: number | null = null;
	subject: string = '';
	message: string = '';
}
</script>

<style scoped></style>
