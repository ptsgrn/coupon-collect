import type { PageServerLoad } from './$types';

export const load = (async ({ locals }) => {
	console.log('/', locals)
	return { 
		session: locals.session
	};
}) satisfies PageServerLoad;