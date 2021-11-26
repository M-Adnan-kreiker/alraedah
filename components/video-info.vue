<template>
	<video
		class="rounded-lg"
		width="100%"
		height="100%"
		controls
		autoplay
		muted
		v-lazy-load
	>
		<source
			src="https://nyc3.digitaloceanspaces.com/alreadahfinance/uploads/homepage_detail/video/1/attachment-3-mca_1min.mp4"
			type="video/mp4"
		/>
	</video>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class extends Vue {}
</script>

<style scoped>
video {
	border: 2px solid #4c83bd;
}
</style>
