<template>
	<div class="mx-4">
		<v-row class="my-12 my-md-16" justify="center">
			<v-col
				style="background: #1d4283"
				class="text-center rounded-t-xl py-16"
				cols="11"
				sm="10"
				md="8"
				elevation="4"
			>
				<h1 class="white--text text-h6 text-md-h4 py-4">
					{{ $t('faqs.title') }}
				</h1>
			</v-col>
			<v-col class="px-0" cols="11" sm="10" md="8">
				<v-expansion-panels class="rounded-xl" multiple>
					<v-expansion-panel
						v-for="qAndA in questionsAndAnswers"
						:key="qAndA.q"
						class="mb-4"
					>
						<v-expansion-panel-header
							class="text-sm-h6 text-body-1 font-weight-regular"
							>{{ qAndA.q }}</v-expansion-panel-header
						>
						<v-expansion-panel-content
							class="
								text-sm-h6 text-body-1
								rounded-xl
								accent--text
								font-weight-regular
							"
						>
							{{ qAndA.a }}
						</v-expansion-panel-content>
					</v-expansion-panel>
				</v-expansion-panels>
			</v-col>
		</v-row>
	</div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class extends Vue {
	get questionsAndAnswers() {
		return this.$t('faqs.questionsAndAnswers');
	}
}
</script>

<style scoped></style>
