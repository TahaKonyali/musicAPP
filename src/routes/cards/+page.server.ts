import prisma from '$lib/database'
import type { PageServerLoad } from './$types';

export const load = (async () => {
    const response = await prisma.musicCard.findMany({
        include: { user: true }
    })
    return { feed: response };
}) satisfies PageServerLoad;