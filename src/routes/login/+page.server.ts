import type { Actions } from './$types';
import { fail } from '@sveltejs/kit';

export const actions = {
	login: async ({ cookies, request }) => {
		const data = await request.formData();
		const username = data.get('username');
		const password = data.get('password');

		if (!username || !password) {
			return fail(400, {
				error: true,
				message: `ต้องการข้อมูล: ${!username ? 'username' : ''} ${!password ? 'password' : ''}`
			});
		}
	}
} satisfies Actions;
