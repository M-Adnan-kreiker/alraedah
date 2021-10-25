<template>
	<div>
		<div class="d-flex mb-4">
			<div class="d-flex" v-for="(fee, i) in fees" :key="i">
				<img class="pr-2" src="/info.svg" alt="" />
				<span class="mr-4">{{ fee }}</span>
			</div>
		</div>
		<div class="d-flex">
			<div v-for="info in moreInfo" :key="info">
				<p class="ml-9 mr-6">{{ info }}</p>
			</div>
		</div>
	</div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class extends Vue {
	@Prop() fees!: string[];
	@Prop() moreInfo!: string[];
}
</script>

<style scoped></style>
