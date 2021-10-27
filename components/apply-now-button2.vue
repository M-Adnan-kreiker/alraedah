<template>
	<div>
		<v-btn
			class="
				apply-now
				white--text
				font-weight-bold
				text-h6
				apply-btn
				text-capitalize
				rounded-lg
			"
			@click="openDialog"
			to="#"
			style="color: #ffffff"
			:style="cssVars"
			active-class="no-active"
		>
			{{ buttonText }}
		</v-btn>
	</div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class extends Vue {
	@Prop(String) buttonWidth!: string;
	@Prop({ default: 'min(26px, 2vw)' }) buttonPadding!: string;
	@Prop({ default: '#1D4283' }) buttonColor!: string;
	@Prop({ default: '#ffffff' }) buttonTextColor!: string;
	@Prop({ default: 'Apply Now' }) buttonText!: string;
	@Prop({ default: '24px' }) buttonFontSize!: string;
	text = this.buttonText;
	cssVars = {
		'--padding': this.buttonPadding,
		'--width': this.buttonWidth,
		'--color': this.buttonColor,
		'--fontSize': this.buttonFontSize,
		'--textColor': this.buttonTextColor,
	};
	openDialog() {
		this.$nuxt.$emit('trigger-dialog');
	}
	closeForm() {
		this.$nuxt.$emit('trigger-dialog');
	}
}
</script>

<style scoped>
.v-btn {
	width: var(--width);
	padding: var(--padding) !important;
	background: var(--color) !important;
	font-size: var(--fontSize) !important;
	color: var(--textColor) !important;
	border: 1px solid #1d4283;
	position: relative;
	z-index: 10;
}
.v-btn--active.no-active::before {
	opacity: 0 !important;
}
.overlay {
	position: fixed; /* Positioning and size */
	top: 0;
	left: 0;
	width: 100vw;
	z-index: 10000;
	height: 100vh;
	background-color: rgba(128, 128, 128, 0.5); /* color */
}
</style>
