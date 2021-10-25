<template>
	<div class="mx-4 mx-sm-8 mx-md-16 mt-16">
		<v-row>
			<v-col cols="12" class="center-text" sm="9">
				<h1
					class="
						primary--text
						text-sm-h4 text-pre-line text-md-h3
						font-weight-bold
					"
				>
					{{ $t('careers.title') }}
				</h1>
				<p class="info--text text-body-1 text-pre-line text-md-h6 text-h6">
					{{ $t('careers.text') }}
				</p>
			</v-col>
		</v-row>
		<generic-form>
			<template v-slot:title>
				{{ $t('careers.info') }}
			</template>
			<template v-slot:file>
				<template>
					<v-col class="py-0" cols="12">
						<v-file-input
							class="pt-0"
							flat
							prepend-icon=""
							prepend-inner-icon="mdi-paperclip"
							outlined
							solo
							accept=".pdf"
							:label="$t('uploadResume')"
						>
							dsafsd
						</v-file-input>
					</v-col>
				</template>
			</template>
			<template v-slot:image>
				<v-img
					class="py-0 rounded-r-lg"
					height="100%"
					src="/apply.png"
					alt=""
				/>
			</template>
		</generic-form>
	</div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class extends Vue {}
</script>

<style scoped></style>
