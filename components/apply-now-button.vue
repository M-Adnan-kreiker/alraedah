<template>
	<!-- <v-dialog light v-model="dialog"> -->
	<!-- <template v-slot:activator="{ on, attrs }"> -->
	<v-btn
		@click="openDialog"
		class="
			white--text
			font-weight-bold
			text-h6
			apply-btn
			text-capitalize
			rounded-lg
		"
		to="#"
		:style="cssVars"
		active-class="no-active"
	>
		{{ buttonText }}
	</v-btn>
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
	dialog = false;

	openDialog() {
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
}
.v-btn--active.no-active::before {
	opacity: 0 !important;
}
</style>
