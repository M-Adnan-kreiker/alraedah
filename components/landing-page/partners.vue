<template>
	<main class="mt-10">
		<h1
			class="
				text-center text-h5 text-sm-h4 text-md-h3
				font-weight-bold
				primary--text
			"
		>
			{{ $t('partners') }}
		</h1>
		<v-row justify="center" class="py-16 d-none d-sm-flex">
			<v-col
				class="d-flex justify-center"
				cols="12"
				sm="4"
				v-for="image in images"
				:key="image.src"
			>
				<img
					max-height="250"
					class="mx-auto"
					max-width="300"
					:src="image.src"
					style="max-width: 300px; width: 100%"
				/>
			</v-col>
		</v-row>
		<v-carousel
			class="d-block d-sm-none"
			:show-arrows="false"
			cycle
			interval="2500"
			height="400"
			hide-delimiter-background
		>
			<v-carousel-item v-for="image in images" :key="image.src">
				<v-sheet color="transparent" height="100%">
					<v-row class="fill-height" align="center" justify="center">
						<div class="text-h2">
							<v-img
								max-height="250"
								class="mx-auto"
								max-width="300"
								:src="image.src"
							></v-img>
						</div>
					</v-row>
				</v-sheet>
			</v-carousel-item>
		</v-carousel>
	</main>
</template>

<script setup lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class extends Vue {
	images = [
		{
			src: '/geidea.webp',
		},
		{
			src: '/noon.webp',
		},
		{
			src: '/sure.webp',
		},
	];
}
</script>

<style scoped>
main {
	background: linear-gradient(
		179.59deg,
		rgba(255, 255, 255, 0.72) 3.17%,
		rgba(140, 181, 225, 0.6) 50.93%,
		rgba(255, 255, 255, 0.72) 99.97%
	);
}
</style>
