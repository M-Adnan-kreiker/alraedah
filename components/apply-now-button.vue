<template>
	<v-dialog light v-model="dialog">
		<template v-slot:activator="{ on, attrs }">
			<v-btn
				class="
					white--text
					font-weight-bold
					text-h6
					apply-btn
					text-capitalize
					rounded-lg
				"
				v-bind="attrs"
				v-on="on"
				to="#"
				:style="cssVars"
				active-class="no-active"
			>
				{{ buttonText }}
			</v-btn>
		</template>
		<contact-form @close-dialog="closeForm"></contact-form>
	</v-dialog>
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
	closeForm() {
		this.dialog = false;
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
