import {
	Module,
	VuexAction,
	VuexModule,
	VuexMutation,
} from 'nuxt-property-decorator';


export interface Mountain {
	title: string;
	description: string;
	height: string;
	countries: string[];
	continent: string;
	image: string;
	dir: string;
	path: string;
	slug: string;
	updatedAt: string;
}

// Module's namespaced name MUST include the namespace (path).
@Module({
	name: 'modules/mountains',
	stateFactory: true,
	namespaced: true,
})
export default class Mountains extends VuexModule {
	public _mountains = [] as Mountain[]
	public _mountain = {} as Mountain

	get mountains() {
		return this._mountains;
	}
	get mountain() {
		return this._mountain;
	}
	@VuexMutation
	setMountains(mountains: Mountain[]) {
		this._mountains = mountains;
	}
	@VuexMutation
	setMountain(mountain: Mountain) {
		this._mountain = mountain;
	}
	@VuexAction
	async getMountains() {
		const result = await this.store.$axios.$get('https://api.nuxtjs.dev/mountains')
		this.setMountains(result)
	}
	@VuexAction
	async getMountain(payload: string) {
		const result = await this.store.$axios.$get(`https://api.nuxtjs.dev/mountains/${payload}`)
		console.log('state result',result)
		this.setMountain(result)
	}
	}

