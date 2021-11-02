<template>
	<div style="height: 100%; width: 100%">
		<v-card
			height="90%"
			elevation="4"
			min-width="290"
			min-height="170"
			class="d-flex rounded-xl cards center-text justify-center py-2 my-6"
		>
			<img
				max-height="94"
				max-width="95"
				:src="currentCard.image"
				alt="submit a request"
				class="mx-3 mx-sm-4 img align-self-center flex-grow-1"
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
						flex-grow-1
					"
					:class="$i18n.locale === 'en' ? 'pr-4' : 'pl-4'"
				>
					{{ currentCard.text }}
				</p>
			</div>
		</v-card>
	</div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class extends Vue {
	@Prop() card!: {};
	get currentCard() {
		return this.card;
	}
}
</script>

<style scoped></style>
