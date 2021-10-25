<template>
	<v-card
		elevation="8"
		color="primary"
		style=""
		class="
			card
			d-flex
			flex-column
			rounded-lg
			white--text
			mx-auto
			my-4
			px-4
			pa-sm-4
			align-center
			product-card
		"
		height="570"
		width="350"
		min-width="240"
	>
		<v-card-title
			id="header"
			class="text-lg-h4 text-h4 my-auto text-capitalize text-center px-0"
			><slot name="header"></slot
		></v-card-title>
		<!-- <v-card-text
			id="amount"
			class="white--text py-0 my-auto text-center text-h5 text-sm-h5"
		>
		</v-card-text> -->
		<slot name="amount"></slot>
		<!-- <div class="my-auto" id="content"> -->
		<!-- <v-card-text
				id="content"
				class="white--text text-subtitle-2 px-0 mx-2 py-0 text-sm-subtitle-1"
			>
			</v-card-text> -->
		<slot name="content"></slot>
		<!-- </div> -->
		<v-card-actions id="button" class="justify-end my-auto">
			<slot name="button"></slot>
		</v-card-actions>
	</v-card>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';

@Component
export default class extends Vue {
	@Prop(Object) card!: {};
}
</script>

<style scoped></style>
