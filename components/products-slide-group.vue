<template>
	<swiper class="swiper" :options="swiperOption">
		<swiper-slide
			class="d-flex justify-center"
			v-for="card in products"
			:key="card.id"
		>
			<pricing-card style="margin: 0 20px !important" :card="card">
				<template v-slot:header>
					{{ card.type }}
				</template>
				<template v-slot:amount>
					<div class="white--text py-0 my-auto text-center text-h5 text-sm-h5">
						{{ $t('upTo') }} <br />
						<span>{{ card.upTo }}</span>
					</div>
				</template>
				<template v-slot:content>
					<div class="d-flex flex-column">
						<div v-for="(item, j) in card.card.info" :key="j">
							<div class="d-flex">
								<img
									width="15"
									height="21"
									style="object-fit: contain"
									class="mx-2 mx-sm-3 pt-2 align-self-start"
									src="/checkMark.svg"
									alt=""
								/>
								<p
									class="
										my-1
										px-2
										white--text
										text-subtitle-2
										px-0
										mx-2
										py-0
										text-sm-subtitle-1
										px-0
										mx-2
										py-0
									"
								>
									{{ item }}
								</p>
							</div>
						</div>
					</div>
				</template>
				<template v-slot:button>
					<v-btn
						:to="localeRoute(card.link)"
						class="
							primary--text
							rounded-lg
							font-weight-bold
							px-4
							py-3
							px-sm-12
							text-body-1
						"
						>{{ $t('moreInfoButton') }}</v-btn
					>
				</template>
			</pricing-card>
		</swiper-slide>

		<div class="swiper-button-prev" slot="button-prev"></div>
		<div class="swiper-button-next" slot="button-next"></div>
	</swiper>
</template>

<script>
import { Swiper, SwiperSlide } from 'vue-awesome-swiper';
import 'swiper/css/swiper.css';

export default {
	name: 'swiper-example-loop-group',
	title: 'Loop mode with multiple slides per group',
	components: {
		Swiper,
		SwiperSlide,
	},
	data() {
		return {
			swiperOption: {
				slidesPerView: 3,
				spaceBetween: 10,
				slidesPerGroup: 1,
				loop: false,
				loopFillGroupWithBlank: false,

				navigation: {
					nextEl: '.swiper-button-next',
					prevEl: '.swiper-button-prev',
				},
				breakpoints: {
					1048: {
						slidesPerView: 3,
						spaceBetween: 1,
					},
					768: {
						slidesPerView: 2,
						spaceBetween: 40,
					},
					280: {
						slidesPerView: 1,
						spaceBetween: 40,
					},
				},
			},
		};
	},
	computed: {
		products() {
			return this.$t('products');
		},
	},
};
</script>

<style scoped>
.swiper-pagination-bullet.swiper-pagination-bullet-active::after {
	height: 28px;
	width: 28px;
}
@media (max-width: 600px) {
	.card {
		width: 53vw !important;
		height: 580px !important;
	}
}
.card {
	width: 350px !important;
}
.swiper-button-next,
.swiper-button-prev {
	color: #1e4382;
	background: #f3f3f3;
	border-radius: 50%;
	padding: 20px;
}
</style>
