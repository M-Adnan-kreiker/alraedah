export default {
	testMsg: 'Hello World!',
	yes: 'Yes',
	no: 'No',
	uploadResume: 'Upload your resume',
	submitButton: 'Submit',
	closeButton: 'Close',
	chargesCalc: 'Charges Calculator',
	upTo: 'Up to',
	moreInfoButton: 'More Information',
	detailsButton: 'Details',
	applyButton: 'Apply Now',
	howItWorks: 'How it works:',
	header: {
		home: 'Home',
		products: 'Products',
		solutions: 'Solutions',
		careers: 'Careers',
		aboutUs: 'About us',
		productsSubMenu: [
			{ name: 'Point of Sale Pro', link: '/products/pro' },
			{
				name: 'Point of Sale Regular',
				link: '/products/regular',
			},
			{
				name: 'Point of Sale Lite',
				link: '/products/lite',
			},
			{
				name: 'E-Commerce Financing',
				link: '/products/e-commerce',
			},
		],
		about: [
			{ title: 'Mission and Vision', link: '/about-us' },
			{
				title: 'Financial Reports',
				link: '/financial-reports',
			},
		],
	},
	landingPage: {
		title: 'Get the Financing\nYour Business\nNeeds',
		img: '/banner2.png',
		text: 'AlRaedah Finance offers comprehensive Islamic finance solutions to small and medium sized enterprises in the Kingdom of Saudi Arabia.		',
	},
	achievements: {
		title: 'We Help You Grow Your Buisness',
		text: 'A Glimpse of Our Achievements',
		cases: {
			projects: 'Projects Finished',
			customers: 'Satisfied Customers',
			cases: 'Cases',
		},
	},
	solutions: {
		title:
			'Tired of getting turned down by traditional banks?\nDon’t worry Alraedah has got your back',
		text: 'AlRaedah Finance offers comprehensive Islamic finance solutions to small and medium sized enterprises in the Kingdom of Saudi Arabia. We continue to maintain our market leadership by offering the following:',
		cards: [
			{
				title: 'Small Businesses Love AlRaedah',
				img: '/shop.svg',
				text: 'Why? Because we’ll help you find the right financing solution for your business and provide great service along the way.',
			},
			{
				title: 'Simplified Process',
				img: '/process.svg',
				text: 'Our financing processes are not overly burdensome, require less documentation and with faster response times',
			},
			{
				title: 'Innovation',
				img: '/innovation.svg',
				text: 'We strive to develop and improve our products and services, to ensure that the "Al-Raedah" remains within the definitive limit of financial services.',
			},
			{
				title: 'Focused On Small Business 100%',
				img: '/support.svg',
				text: 'Flexibility to advance your business and urgent financing; To achieve your dreams, and embark on the path to success!',
			},
			{
				title: 'Expert Funding Advisors',
				img: '/headset.svg',
				text: 'Our professional and highly skilled team are capable of responding to all client inquiries in an expedient, effective and efficient manner',
			},
			{
				title: 'Bespoke Financing',
				img: '/badge.svg',
				text: 'Our solutions are highly customized, practical and address real-world challenges in real-time because each business we serve has its own identity',
			},
		],
	},
	productsTable: {
		title: 'AlRaedah’s Products For You',
		text: 'Get The Financing Your Business Needs, Quickly And Easily',
	},
	partners: 'Our Partners',
	kickStart: {
		title: 'Kick Start Your Business',
		text: 'With A Simple Process',
		cards: [
			{
				title: 'Submit your application on the website',
				text: 'Fill out the form in a few minutes and attach the data and images of the required documents.',
				image: '/submit.svg',
			},
			{
				title: 'Wait for our representative to call',
				text: 'After completing the application, one of our representatives will contact you within 48 hours to provide you with the best financingsolutions to suit your project.',
				image: '/wait.svg',
			},
			{
				title: 'Get the funding amount',
				text: 'Once your application has been approved, you will receive the funding on time and in advance, and in a timely and in-place disassociation with the prescribed conditions and limitations.',
				image: '/fund.svg',
			},
		],
	},
	products: [
		{
			id: 1,
			category: 'pro',
			type: 'pro',
			upTo: '5,000,000 SAR',
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
			type: 'regular',
			upTo: '1,000,000 SAR',
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
			type: 'lite',
			upTo: '500,000 SAR',
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
			type: 'e-commerce',
			upTo: '500,000 SAR',
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
	],
	footer: {
		moto: 'We Finance, You Grow',
		nav: [
			{ name: 'Regulatory', link: '/regulatory' },
			{ name: 'FAQs', link: '/faqs' },
			{ name: 'Contact us', link: '/contact-us' },
			{ name: 'Report a Misbehaviour', link: '/report-violation' },
		],
		addresses: [
			{
				1: 'Main Office',
				2: '3rd floor - town b',
				3: 'Olaya Towers, Olaya Main St.',
				4: '12213',
				5: 'Get Directions',
			},
			{
				1: 'Khobar Branch',
				2: 'Silver Tower',
				3: 'King Abdul Aziz Street',
				4: 'Khobar 31952',
				5: 'Get Directions',
			},
			{
				1: 'Buraydah Branch',
				2: 'Office No:5, 2506',
				3: 'An Naziyah',
				4: 'Buraydah 52366',
				5: 'Get Directions',
			},
		],
		contactCol: {
			saudi: 'Saudi Arabia',
			tel: 'Tel. 920004495',
			time: 'Sun - Thurs: 09:00am - 5:00pm',
		},
		copyRight: 'alraedah 2021',
	},
	productsPage: {
		title: 'Islamic Financing Solutions',
		text: 'AlRaedah Finance’s products are tailored to suit the unique and distinctive needs of our SME clients because every business is different. As a direct lender, AlRaedah Finance provides fast and simple financing solutions. Presently, AlRaedah offers the following product(s) according to the type of financing required:		',
	},
	chartCard: {
		facilityAmount: 'Facility Amount',
		totalPaybackAmount: 'Total Payback Amount',
		netFinancingAmount: 'Net Financing Amount',
		securityDeposit: 'Security Deposit',
		ps: '* Calculations are approximate. Terms and conditions apply.',
	},
	careers: {
		title: 'Join Our Team',
		text: 'Be part of something special, start helping small businesses succeed with Alraedah. We want people who match the company’s ambition, honesty and integrity. We want people who want to make a difference.',
		info: 'Please fill the information below.\nOur representative will contact you soon.',
	},
	aboutUs: {
		title: 'Who We Are',
		text: 'AlRaedah Finance is the pioneer of bespoke solutions for small and medium sized enterprises (“SMEs”) seeking to achieve long-term, sustainable growth. Since its establishment in 2016, AlRaedah has become the principal financing institution for SMEs in the Kingdom of Saudi Arabia. Our success is built on our simple and transparent process, our in-depth understanding of the local market, and our flexible financing programs.\nAlRaedah Finance offers the most extensive coverage for Sharia’h compliant financing solutions within the Kingdom, with its headquarters located in Riyadh, a branch office in Burayda, and aggressive digital expansion plans. Our ease of accessibility ensures that we maintain our position within the financial services sector.',
		mainCards: [
			{
				title: 'Our Vision',
				text: 'To establish an inclusive and sustainable financing platform that enables small and medium businesses to grow, while supporting the local economies which they serve.',
				image: '/vision.svg',
			},
			{
				title: 'Our Mission',
				text: 'To empower small and medium sized buisness onwers to achieve their entreprenurial dreams by providing acces to financing solutions that positively impact their business.',
				image: '/mission.svg',
			},
		],
		leadership: 'Our Leadership Is Defined By 4 Pillars:',
		subCards: [
			{
				title: '1. Customer Perception',
				text: 'Establishing Al-Raedah as a customer-centric organization with a desire for excellence in service, to become the preferred financial services provider in Saudi Arabia.',
				image: '/man.svg',
			},
			{
				title: '2. Innovation',
				text: 'We strive to develop and improve our products and services, to ensure that the "Al-Raedah" remains within the definitive limit of financial services.',
				image: '/innovation.svg',
			},
			{
				title: '3. Market Responsiveness',
				text: 'To contribute positively to the national economy by enabling businessmen and small businesses to grow, progress, and prosper.',
				image: '/pie.svg',
			},
			{
				title: '4. Social Responsibility',
				text: 'Cultivate a competitive advantage by anticipating changes in customer preferences or market trends and delivering solutions that are proactive',
				image: '/support2.svg',
			},
		],
	},
	report: {
		title: 'Report a Misconduct',
		text: 'Your complaint will be handled by our Complaints Team, a team of dedicated, experienced and impartial complaint handlers',
	},
	financialReports: {
		title: 'Financial Reports',
		years: [2016, 2017, 2018, 2019, 2020, 2021],
		items: [
			[{ name: 'Annual Report 2016', link: '' }],
			[
				{ name: 'Annual Report 2017 ', link: '' },
				{ name: 'Board Report 2017', link: '' },
			],
			[
				{ name: 'Annual Report 2018', link: '' },
				{ name: 'Board Report 2018', link: '' },
			],
			[
				{ name: 'Annual Report 2019', link: '' },
				{ name: 'Board Report 2019', link: '' },
			],
			[
				{ name: 'Annual Report 2020', link: '' },
				{ name: 'Board Report 2020', link: '' },
				{ name: 'Interim Report Q1 2020', link: '' },
				{ name: 'Interim Report Q2 2020', link: '' },
				{ name: 'Interim Report Q3 2020', link: '' },
			],
			[
				{ name: 'Interim Report Q1 2021', link: '' },
				{ name: 'Interim Report Q2 2021', link: '' },
			],
		],
	},
	faqs: {
		title: 'Frequently Asked Questions (FAQs)',
		questionsAndAnswers: [
			{
				q: 'Q . What is the payment mechanism for installments?',
				a: 'A. With POS Financing, you won’t have fixed monthly payments. Instead, repayment is automatic and settled daily. Daily payments are based on a small fixed percentage (holdback rate) of your future debit and credit card sales and withheld to repay the loan. It’s simple, easy and affordable because repayment is a fixed percentage of your daily POS transactions, not a fixed Riyal amount.',
			},
			{
				q: 'Q . How long does the process take to receive funds?',
				a: 'A. It’s very quick, once we receive the full documentation we need, we can provide funds within 5 business days.',
			},
			{
				q: 'Q . What is the minimum and maximum amount of funding and how long is the financing period?',
				a: 'A. At AlRaedah, we provide financing from a minimum of SR50,000 to a maximum of SR500,000 with no fixed repayment period.',
			},
			{
				q: 'Q . How much will I qualify for?',
				a: 'A. Our financing is based on the monthly POS sales of your business. We will typically approve you for up to 20% of your annual POS sales. We do not look at your cash sales. For example, if you generate SR1M worth of annual POS sales, you can receive up to SR200,000 in financing.',
			},
			{
				q: 'Q . What is the Profit Rate?',
				a: 'A. We would need to analyze your application and bank statements to provide an accurate offer. Our rates can start as low as 9.99%.',
			},
			{
				q: "Q . I don't have a business, but I would like to start one. Can I still apply for a facility?",
				a: 'A. No, unfortunately, we don’t provide funding to start-up businesses or for new business activities. However, if you use one of our POS terminals, one of our relationship managers will be in contact with you once you generate sufficient daily POS transactions and walk you through the steps for funding your business.',
			},
		],
	},
	genericForm: {
		fullname: 'Full Name',
		email: 'Email',
		subject: 'Subject',
		number: 'Number',
		message: 'Message',
		addAttachment: 'Add an Attachment',
	},
	contactForm: {
		title: 'Register to apply for POS Finance online',
		registration:
			'Do you have a valid commercial registration for your company?',
		creditCard: 'Does your company receive payments (Mada, Visa, Mastercard)?',
		agree: 'I agree to the',
		tos: 'terms and conditions policy',
		getStarted: 'Get Started With Alraedah',
		getFunding: 'Get the funding your business needs quickly and easily.',
		fullname: 'Full name',
		mobile: 'Mobile',
		company: "Company's name",
		email: 'Email',
		contactTime: 'Good time to contact',
	},
	pricing: {
		title: 'Pricing',
		hint: 'Pricing as per April 2021',
		text: 'Get detailed information about our products using the pricing calculator. Select a product to see its informaiton.',
		selectProduct: 'Select a product',
		products: ['Pro', 'Regular', 'Lite', 'E-commerce'],
	},
};
