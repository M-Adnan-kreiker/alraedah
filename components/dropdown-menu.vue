<template>
	<div class="dropdown d-flex justify-center">
		<v-btn
			text
			nuxt
			exact-active-class="active"
			small
			dense
			:to="localeRoute(route)"
			class="
				primary--text
				py-5
				rounded-0
				px-0
				text-body-2 text-lg-body-1 text-capitalize
				font-weight-bold
			"
			color="primary"
			>{{ text }}</v-btn
		>
		<div class="dropdown-content">
			<nuxt-link
				v-for="item in items"
				:key="item.title"
				:to="localeRoute(item.link)"
				><span>{{ item.title }}</span></nuxt-link
			>
		</div>
	</div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class extends Vue {
	@Prop(String) text!: string;
	@Prop(String) route!: string;
	@Prop([Array, Object]) items!: [] | {};
}
</script>

<style scoped>
.dropdown {
	position: relative;
	display: inline-block;
}
.dropdown-content {
	display: none;
	position: absolute;
	background-color: #ffffff;
	min-width: 200px;
	box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
	z-index: 1000;
	border-radius: 5px;
	margin-top: 40px;
}

.dropdown-content a {
	color: #1e4382;
	padding: 12px 16px;
	text-decoration: none;
	display: block;
	border-radius: 5px;
}

.dropdown-content a:hover {
	background-color: rgb(252, 248, 248);
	border-radius: 5px;
}

.dropdown:hover .dropdown-content {
	display: block;
}
</style>
