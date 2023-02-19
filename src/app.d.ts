/// <reference types="@sveltejs/kit" />

interface GettedCoupon {
	name: string;
	code: string;
	amount: number;
	amount_type: 'percent' | 'fixed';
	amount_limit: number?;
	amount_min: number?;
	amount_max: number?;
	code: string;
	isUsed: boolean;
}

interface SessionData {
	user: {
		coupon: Coupon[] | [];
		username: string;
		password: string;
		fullname: string;
		email: string;
		phone: string;
	}
}

// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
declare global {
	namespace App {
		// interface Error {}
		interface Locals {
			session: import('svelte-kit-cookie-session').Session<SessionData>;;
		}
		interface PageData {
			session: SessionData
		}
		// interface Platform {}
	}
}

export {};
