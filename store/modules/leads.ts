import {
	Module,
	VuexAction,
	VuexModule,
	VuexMutation,
} from 'nuxt-property-decorator';
import { lead } from '~/types';

@Module({
	name: 'modules/leads',
	stateFactory: true,
	namespaced: true,
})
export default class Leads extends VuexModule {
	public lead = {} as lead;
	public source: string = '';

	@VuexMutation
	setLead(payload: lead) {
		this.lead = payload;
	}

	@VuexMutation
	setSource(payload: string) {
		this.source = payload;
	}

	@VuexAction({ rawError: true })
	async postForm(payload: lead) {
		try {
			const data = await this.store.$axios.$post(
				`${process.env.EP}/prospects/createProspect`,
				payload
			);
			console.log(data);
			if (data.status === 200) {
				this.setLead(payload);
			}
		} catch (error) {
			console.log(error);
		}
	}
}
