import prisma from '$lib/database';
import { redirect } from '@sveltejs/kit';
import type { PageServerLoad } from './$types'
import type { Actions } from './$types';

export const load = (async () => {

    const response = await prisma.musicCard.findMany({
        where: { published: true },
        include: { user: true }
    })
    return { feed: response };
}) satisfies PageServerLoad;

export const actions: Actions = {
    logout: async (event) => {
		event.cookies.delete('AuthorizationToken', {path: '/'});
		throw redirect(303, '/');
	}
}