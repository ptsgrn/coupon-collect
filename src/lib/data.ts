import { browser } from '$app/environment';
import { writable } from 'svelte/store';

const initUserData = [
	{
		username: 'johndoe',
		fullname: 'John Doe',
		email: 'johndoe@test.com',
		phone: '0123456789',
		password: '123456',
		coupon: [
			{
				name: 'คูปองต้อนรับสมัครบัญชีใหม่',
				code: 'WELCOME',
				amount: 20,
				amount_type: 'fixed',
				amount_limit: 100,
				isUsed: false
			}
		]
	}
];

const initCouponData = [
	{
		name: 'คูปองต้อนรับสมัครบัญชีใหม่',
		code: 'WELCOME',
		amount: 20,
		amount_type: 'fixed',
		amount_limit: 100,
		isUsed: false
	}
];

const initProductData = [
	{
		name: 'Espresso',
		price: 45
	},
	{
		name: 'Americano',
		price: 55
	},
	{
		name: 'Hot Cappuccino',
		price: 55
	},
	{
		name: 'Iced Cappuccino',
		price: 65
	},
	{
		name: 'Hot Latte',
		price: 55
	},
	{
		name: 'Iced Latte',
		price: 65
	},
	{
		name: 'Hot Mocha',
		price: 55
	},
	{
		name: 'Iced Mocha',
		price: 65
	},
	{
		name: 'Hot Mocha Green Tea',
		price: 55
	},
	{
		name: 'Iced Mocha Green Tea',
		price: 65
	}
];

const currentUserData = writable({});

const userData = writable(initUserData);
const couponData = writable(initCouponData);
const productData = writable(initProductData);

userData.subscribe((value) => {
	if (browser) {
		localStorage.setItem('userData', JSON.stringify(value));
	}
});

couponData.subscribe((value) => {
	if (browser) {
		localStorage.setItem('couponData', JSON.stringify(value));
	}
});

productData.subscribe((value) => {
	if (browser) {
		localStorage.setItem('productData', JSON.stringify(value));
	}
});

export {
	userData,
	couponData,
	productData,
	initCouponData,
	initUserData,
	initProductData,
	currentUserData
};
