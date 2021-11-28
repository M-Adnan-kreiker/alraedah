<template>
	<div class="my-sm-8">
		<div>
			<h1
				class="
					text-center text-h5 text-sm-h4 text-md-h3
					font-weight-bold
					primary--text
					pt-2
				"
			>
				{{ $t('productsTable.title') }}
			</h1>
			<h2
				class="
					text-center text-h6 text-sm-h5
					mb-6
					text-md-h4
					pt-2 pt-sm-8
					info--text
					px-2
				"
			>
				{{ $t('productsTable.text') }}
			</h2>
		</div>
		<v-sheet color="transparent" class="">
			<products-slide-group></products-slide-group>
		</v-sheet>
	</div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class extends Vue {}
</script>

<style scoped>
.dis {
	display: none;
}
.card {
	width: 350px !important;
}
@media (max-width: 800px) {
	.main-row {
		display: none;
	}
	.dis {
		display: table-cell;
	}
}

@media (max-width: 450px) {
	.td {
		font-size: 12px !important;
		padding: 6px !important;
	}
}

@media (max-width: 600px) {
	.card {
		width: 53vw !important;
		height: 580px !important;
	}
}
</style>
