export interface myProduct {
	id: number;
	category: string;
	type: string;
	category2: string;
	upTo: string;
	link: string;
	link2: string;
	image: string;
	name: string;
	info: string;
	step: number;
	max: number;
	fees: string[];
	moreInfo: string[];
	guides: string[];
	card: {
		title: string;
		info: {
			tenor: string;
			maxAmount: string;
			minAmount: string;
			repayment: string;
			securityDeposit: string;
			feesRefund: string;
			conditions: string;
		};
	};
	caveat: string;
}

export interface lead {
	name: string;
	email: string;
	phone: string;
	crAvailability: boolean;
	posAvailability: boolean;
	contactTime: string;
	source: string | (string | null)[];
}

export type VForm = Vue & {
	validate: () => boolean;
	resetValidation: () => boolean;
	reset: () => void;
};

import { ValidationProvider } from 'vee-validate';

type ProviderInstance = InstanceType<typeof ValidationProvider>;

export interface VeeValidateObserverRef extends Vue {
	subscribe(subscriber: any, kind?: string): void;
	unsubscribe(id: string, kind?: string): void;
	validate(options?: { silent?: boolean }): Promise<boolean>;
	reset(): void;
	restoreProviderState(provider: ProviderInstance): void;
	removeProvider(id: string): void;
	setErrors(errors: Record<string, string[]>): void;
}
