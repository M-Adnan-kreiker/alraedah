<template>
	<div class="mt-10 mx-4 mx-sm-16">
		<v-row justify="center">
			<v-col cols="12" sm="10" md="8">
				<h1
					class="
						primary--text
						text-sm-h5 text-pre-line text-md-h4
						font-weight-bold
						mb-4
					"
				>
					Senior Frontend Engineer / Vue.js
				</h1>
				<p>
					Hey there 👋! Do you want to join a team of science innovation
					enthusiasts? At Nova we do science with a combination of biology,
					maths, computer science, artificial intelligence and... VueJS!
				</p>
				<h3 class="mt-6 secondary--text">{{ $t('mainRequirements') }}</h3>
				<ul>
					<li>
						Being involved in the design and architecture decision process of an
						ambitious scientific SaaS project.
					</li>
					<li>
						Being involved in the design and architecture decision process of an
						ambitious scientific SaaS project.
					</li>
					<li>
						Being involved in the design and architecture decision process of an
						ambitious scientific SaaS project.
					</li>
					<li>
						Being involved in the design and architecture decision process of an
						ambitious scientific SaaS project.
					</li>
				</ul>
				<h3 class="mt-6 secondary--text">{{ $t('benefits') }}</h3>
				<ul>
					<li>
						Being involved in the design and architecture decision process of an
						ambitious scientific SaaS project.
					</li>
					<li>
						Being involved in the design and architecture decision process of an
						ambitious scientific SaaS project.
					</li>
					<li>
						Being involved in the design and architecture decision process of an
						ambitious scientific SaaS project.
					</li>
					<li>
						Being involved in the design and architecture decision process of an
						ambitious scientific SaaS project.
					</li>
				</ul>
				<h3 class="mt-6 secondary--text">{{ $t('ourValues') }}</h3>
				<p>
					Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iste odio ab
					id excepturi! Praesentium rerum labore quidem rem obcaecati nulla
					distinctio assumenda voluptatem numquam aliquam perspiciatis repellat
					eaque, eius ratione sapiente incidunt dolorem quae vero temporibus.
					Sit necessitatibus doloribus ullam.
				</p>
			</v-col>
		</v-row>
		<v-row justify="center">
			<v-col cols="12" md="9">
				<generic-form>
					<!-- prettier-ignore -->
					<template v-slot:title>{{ $t('careers.info') }}</template>
					<template v-slot:file>
						<template>
							<v-col class="py-0" cols="12">
								<v-file-input
									class="pt-0"
									flat
									prepend-icon=""
									prepend-inner-icon="mdi-paperclip"
									outlined
									solo
									accept=".pdf"
									:label="$t('uploadResume')"
								>
								</v-file-input>
							</v-col>
						</template>
					</template>
					<template v-slot:image>
						<v-img
							:class="$i18n.locale === 'en' ? 'rounded-r-xl' : 'rounded-l-xl'"
							class="py-0"
							height="100%"
							src="/careers.jpg"
							alt=""
						/>
					</template>
				</generic-form>
			</v-col>
		</v-row>
	</div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class extends Vue {}
</script>

<style scoped></style>
