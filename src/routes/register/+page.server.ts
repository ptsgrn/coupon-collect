import type { Actions, PageServerLoad } from './$types';
import { fail } from '@sveltejs/kit';

export const actions = {
	register: async ({ locals, request }) => {
		const data = await request.formData();
		const username = `${data.get('username')}`;
		const password = `${data.get('password')}`;
		const fullname = `${data.get('fullname')}`;
		const email = `${data.get('email')}`;
		const phone = `${data.get('phone')}`;
		console.log({ username, password, fullname, email, phone });
		if (!username || !password || !fullname || !email || !phone) {
			return fail(400, {
				error: true,
				message: `ต้องการข้อมูล: ${!username ? 'username' : ''} ${!password ? 'password' : ''} ${
					!fullname ? 'fullname' : ''
				} ${!email ? 'email' : ''} ${!phone ? 'phone' : ''}`
			});
		}
		if (!/0[0-9]{9}/.test(phone)) {
			return fail(400, { error: true, message: 'เบอร์โทรศัพท์ไม่ถูกต้อง', errorField: 'phone' });
		}
		if (!/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(email)) {
			return fail(400, { error: true, message: 'อีเมลไม่ถูกต้อง', errorField: 'email' });
		}
		if (username.length < 6) {
			return fail(400, {
				error: true,
				message: 'ชื่อผู้ใช้ต้องมีอย่างน้อย 6 ตัวอักษร',
				errorField: 'username'
			});
		}
		return {
			ok: true,
			message: 'สมัครสมาชิกสำเร็จ',
			data: {
				coupon: [
					{
						name: 'คูปองต้อนรับสมัครบัญชีใหม่',
						code: 'WELCOME',
						amount: 20,
						amount_type: 'fixed',
						amount_limit: 100,
						isUsed: false
					}
				],
				username,
				password,
				fullname,
				email,
				phone
			}
		};
	}
} satisfies Actions;

export const load = (async ({ locals, parent }) => {
	const { session } = await parent();
	console.log(session);
	return {};
}) satisfies PageServerLoad;
