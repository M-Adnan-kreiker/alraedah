<template>
	<div style="height: 100%; width: 100%">
		<v-card
			height="90%"
			:key="card.title"
			:elevation="elevation"
			min-width="290"
			min-height="200"
			class="d-flex rounded-lg cards center-text justify-center py-2 my-6"
		>
			<img
				:src="card.image"
				alt="submit a request"
				class="mx-3 mx-sm-4 img align-self-center"
			/>
			<div class="align-self-center">
				<slot name="title"></slot>
				<p
					class="
						text-body-2 text-sm-body-1
						px-sm-4
						pt-2
						font-weight-regular
						text-md-h6
						mb-0
					"
					:class="$i18n.locale === 'en' ? 'pr-4' : 'pl-4'"
				>
					{{ card.text }}
				</p>
			</div>
		</v-card>
	</div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class extends Vue {
	@Prop() elevation!: number;
	@Prop() card!: {};
}
</script>

<style scoped></style>
