<template>
	<v-card
		elevation="4"
		style=""
		class="
			card
			d-flex
			flex-column
			rounded-xl
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
			class="text-lg-h4 text-h5 my-auto text-capitalize text-center px-0"
			><slot name="header"></slot
		></v-card-title>
		<slot name="amount"></slot>
		<slot name="content"></slot>

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

<style scoped>
.card {
	background: linear-gradient(
		-45deg,
		#3c6796,
		rgb(50, 90, 163),
		#1d4283,
		#163364f8
	);
	background-size: 100% 100%;
}
</style>
