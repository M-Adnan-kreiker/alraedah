<template>
	<div>
		<v-card elevation="12" class="my-8 my-sm-16 rounded-lg py-3 mx-auto">
			<v-form class="mx-auto px-2 py-2 pa-sm-0">
				<v-row>
					<v-col class="pl-sm-8" cols="12" sm="7">
						<div class="mb-12">
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
							>
								<slot name="title"></slot>
							</h1>
						</div>
						<v-col cols="12" class="py-0 mb-0">
							<v-text-field
								v-model="fullName"
								:label="$t('genericForm.fullname')"
								outlined
								class="my-0 py-0"
								type="text"
							></v-text-field>
						</v-col>
						<v-col cols="12" class="py-0 my-0 mt-n3">
							<v-text-field
								v-model="email"
								:label="$t('genericForm.email')"
								outlined
								class="pt-sm-3 my-0"
								type="email"
							></v-text-field>
						</v-col>

						<v-col cols="12" class="py-0 ma-0">
							<v-text-field
								v-model="mobile"
								:label="$t('genericForm.number')"
								outlined
								type="number"
							></v-text-field>
						</v-col>
						<v-col cols="12" class="py-0 mb-0">
							<v-text-field
								v-model="subject"
								:label="$t('genericForm.subject')"
								outlined
								class="my-0 py-0"
								type="text"
							></v-text-field>
						</v-col>
						<slot name="file"></slot>
						<v-col cols="12" class="py-0">
							<v-textarea
								v-model="message"
								:label="$t('genericForm.message')"
								outlined
								class=""
							></v-textarea>
						</v-col>
						<v-btn class="mx-3 mb-4" x-large color="secondary">{{
							$t('submitButton')
						}}</v-btn>
					</v-col>
					<v-col class="d-none py-0 pl-0 d-sm-block" cols="5">
						<slot name="image"></slot>
					</v-col>
				</v-row>
			</v-form>
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
