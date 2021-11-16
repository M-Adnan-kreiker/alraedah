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
	firstColumn: string;
	secondColumn: string;
	thirdColumn: string;
	fourthColumn: string;
	fifthColumn: string;
	feesRatio1: number;
	feesRatio2: number;
	feesRatio3: number;
	feesRatio4: number;
	options: string[] | '';
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
	phone: number | null;
	crAvailability: boolean;
	posAvailability: boolean;
	contactTime: string;
	companyName: string;
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

export type Job = {
	id: number;
	attributes: {
		position: string;
		location: string;
		description: string;
		requirements: string;
		benefits: string;
		values: string;
		createdAt: string;
		updatedAt: string;
		publishedAt: string;
		locale: string;
	};
};

export type FinancialReport = {
	id: number;
	attributes: {
		name: string;
		year: number;
		type: string;
		file: string;
		createdAt: string;
		updatedAt: string;
		publishedAt: string;
		locale: string;
	};
};
