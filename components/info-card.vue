<template>
	<div style="height: 100%; width: 100%">
		<v-card
			height="90%"
			elevation="4"
			min-width="290"
			min-height="170"
			class="d-flex rounded-xl cards center-text justify-center py-2 my-6 px-4"
		>
			<img
				height="94"
				width="95"
				:src="currentCard.image"
				class="mx-3 mx-sm-4 align-self-center big-img flex-grow-1"
				style="object-fit: contain"
			/>
			<div class="align-self-center">
				<v-row
					justify="start"
					class="my-3 align-sm-center d-inline-flex px-4 px-sm-0 card-row"
				>
					<slot name="title"></slot>
					<img
						height="94"
						width="95"
						:src="currentCard.image"
						class="mx-auto mt-4 mx-sm-4 d-none sm-img"
						style="object-fit: contain"
					/>
				</v-row>
				<p
					class="
						text-body-2 text-sm-body-1
						pt-2
						font-weight-regular
						text-md-h6
						mb-0
						flex-grow-1
					"
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

<style scoped>
.line-height {
	line-height: 180% !important;
}

@media (max-width: 470px) {
	.big-img {
		display: none;
	}
	.sm-img {
		display: inline-block !important;
	}
}

@media (max-width: 600px) {
	.card-row {
		flex-direction: column;
		justify-content: center !important;
	}
}
</style>
