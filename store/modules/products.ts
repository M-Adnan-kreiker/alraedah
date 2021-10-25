import { Module, VuexModule } from 'nuxt-property-decorator';

export interface Product {
	id: number;
	category: string;
	type: string;
	link: string;
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

// Module's namespaced name MUST include the namespace (path).
@Module({
	name: 'modules/products',
	stateFactory: true,
	namespaced: true,
})
export default class Products extends VuexModule {
	public products: Product[] = [
		{
			id: 1,
			category: 'pro',
			type: 'products-pro___en',
			link: '/products/pro',
			image: '/products/product-pro.png',
			name: 'Point of Sale Financing (Pro)',
			info: 'POS Pro financing is one of the most important forms of financing that we provide for SMEs that started and worked in the local market for a short period, which seeks to expand and achieve a significant jump in the size of its business and its position in the markets, with flexibility in repayment.',
			step: 500000,
			max: 5000000,
			fees: ['12.5% Annually'],
			moreInfo: ['1.5% Processing fee annually'],
			guides: [
				'From SAR 500,000 to SAR 5,000,000',
				'Financing amount up to 50% of annual POS sales',
				'The value of the financing will be delivered within 30 days of the date of the application',
				'without the need for a guarantor',
			],
			card: {
				title: 'POS Financing (Pro)',
				info: {
					tenor: '2 year tenor',
					maxAmount: 'Up to 5,000,000 SAR',
					minAmount: 'Starting from 1,000,000 SAR',
					repayment: 'Daily repayment',
					securityDeposit: 'No Security deposit',
					feesRefund:
						'Facility processing fess will be collected from the financing amount',
					conditions: 'Must have POS terminal for 12 months',
				},
			},
			caveat:
				'*The terms and conditions and fees above are provided as an example. Actuals terms and conditions may differ on a case by case basis. APR starting from 34.41% ** administrative fees between 1.5%- 2.25%. 15% VAT is applicable. The products advertised in this marketing material are not suitable for customers below 18 years old.			',
		},
		{
			id: 2,
			category: 'regular',
			type: 'products-regular___en',
			link: '/products/regular',
			image: '/products/product-regular.png',
			name: 'Point of Sale Financing',
			info: 'Alraedah works to provide unique financing solutions for entrepreneurs and SMEs that have been launched for at least 6 months, who aspire to promote and expand their businesses and provide them with appropriate financing in a flexible and easy way to help them achieve their ambitions.',
			step: 100000,
			max: 1000000,
			fees: ['16.5% + Processing fee'],
			moreInfo: ['1.5% Processing fee'],
			guides: [
				'The amount of funding starts from SAR 100,000 to SAR 1,000,000.',
				'Financing amount up to 30% of annual POS sales.',
				'Nature of funding: without the need for a guarantor.',
				'No need for fixed monthly installments..',
			],
			card: {
				title: 'POS Financing',
				info: {
					tenor: '12 or 18 month tenor',
					maxAmount: 'Up to 1,000,000 SAR',
					minAmount: 'Starting from 100,000 SAR',
					repayment: 'Daily repayment',
					securityDeposit: 'No Security deposit',
					feesRefund:
						'Facility processing fess will be collected from the financing amount',
					conditions: 'Must have POS terminal for 12 months',
				},
			},
			caveat:
				'*The terms and conditions and fees above are provided as an example. Actuals terms and conditions may differ on a case by case basis. APR starting from 34.41% ** administrative fees between 1.5%- 2.25%. 15% VAT is applicable. The products advertised in this marketing material are not suitable for customers below 18 years old.			',
		},
		{
			id: 3,
			category: 'lite',
			type: 'products-lite___en',
			link: '/products/lite',
			image: '/products/product-lite.png',
			name: 'Point of Sale (POS) Lite',
			info: 'Many companies and establishments may need shortly after the launch of urgent and uncomplicated financing solutions to resolve transactions, speed up operations and strengthen their position in the markets, and because we are aware of the need of these facilities for these quick solutions we have created the financing of (immediate) point of sale for SMEs in 7 working days.',
			step: 50000,
			max: 500000,
			fees: ['16.5% + Processing Fee', '10% + Processing Fee'],
			moreInfo: ['Up to Without Guarantor', 'With Guarantor'],
			guides: [
				'Funding starts from SAR 50,000 to SAR 125,000.',
				'The value of the financing will be delivered within 7 business days from the moment of request. ',
				'Financing amount up to 15% of annual POS sales.',
				'No need for fixed monthly installments.',
			],
			card: {
				title: 'POS Financing (Lite)',
				info: {
					tenor: '12 or 18 month tenor',
					maxAmount: 'Up to 50,000 SAR',
					minAmount: 'Starting from 125,000 SAR',
					repayment: 'Daily repayment',
					securityDeposit: 'No Security deposit',
					feesRefund:
						'Facility processing fess will be collected from the financing amount',
					conditions: 'Must have POS machines for 3 Months',
				},
			},
			caveat:
				'*The terms and conditions and fees above are provided as an example. APR between 27.80% -%53.92 **One-time administrative fees fixed at 5,000 SAR. 15% VAT is applicable. The products advertised in this marketing material are not suitable for customers below 18 years old.			',
		},
		{
			id: 4,
			category: 'e-commerce',
			type: 'products-e-commerce___en',
			link: '/products/e-commerce',
			image: '/e-commerce.png',
			name: 'E-Commerce Financing Program with our partners',
			info: 'Through this unique product, we strive to provide exceptional features to customers affiliated with economic entities, businesses, and partners who have established strategic relationships with us, mainly platforms active in the fields of technology and e-commerce, led by customers or dealers of the Noon platform, to whom we offer this unique product.',
			step: 50000,
			max: 500000,
			fees: [
				'20% + 1.5% Processing Fee',
				'10% + 1% Processing',
				'15% + 1% Processing',
			],
			moreInfo: ['Up to 12 months', 'Up to 6 months', 'Up to 9 months'],
			guides: [
				'You can choose the appropriate financing from two packages spread over 6 or 9 months.',
				'Payment is a weekly or monthly transfer.',
			],
			card: {
				title: 'E-commerce financing',
				info: {
					tenor: '6, 9 or 12 month tenor',
					maxAmount: 'Up to 500,000 SAR',
					minAmount: 'Starting from 500,000 SAR',
					repayment: 'Daily, Weekly, Monthly repayment',
					securityDeposit: 'No Security deposit',
					feesRefund: 'Will be refunded if cancelled by AlRaedah**',
					conditions: 'No Pre-settlement fees',
				},
			},
			caveat:
				'*The terms and conditions and fees above are provided as an example. Actuals terms and conditions may differ on a case by case basis..APR between 23.52% - 40.69% **One-time processing fee between 1% - 1.5%**.15% VAT is applicable. The products advertised in this marketing material are not suitable for customers below 18 years old.			',
		},
	];
}
