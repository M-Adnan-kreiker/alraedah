<template>
	<div class="mt-4">
		<div class="d-flex flex-wrap mb-4">
			<div class="d-flex" v-for="(fee, i) in fees" :key="i">
				<v-img
					width="25"
					height="25"
					contain
					class="mx-2 my-2"
					src="/info.svg"
					alt=""
				></v-img>
				<span class="mx-2 my-2">{{ fee }}</span>
			</div>
		</div>
	</div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class extends Vue {
	@Prop() fees!: string[];
}
</script>

<style scoped></style>
