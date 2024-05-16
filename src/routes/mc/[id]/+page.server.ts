import prisma from "$lib/database";
import { redirect, type RequestHandler } from "@sveltejs/kit";
import type { PageServerLoad } from './$types';


export const load = (async ({ params: { id } }) => {
    const post = await prisma.musicCard.findUnique({
        where: { id: Number(id) },
        include: { user: true },
    });

    return { post };
}) satisfies PageServerLoad;


export const actions = {
    publish: async ({ params: { id } }) => {
        await prisma.musicCard.update({
            where: { id: Number(id) },
            data: {
               published: true
            }
        }, )
    },
    delete: async ({ params: { id } }) => {
        await prisma.musicCard.delete({
            where: { id: Number(id) },
        });
        return redirect(303, '/');
    },
    hide: async ({ params: { id } }) => {
        await prisma.musicCard.update({
            where: { id: Number(id) },
            data: {
                published: false
            }
        })
    }
    /*changeState: async ({ params: { id } }) => {
        const post = await prisma.musicCard.findUnique({ where: { id: Number(id)}})

        if (post) {
            post.published = !post.published;
        }

        throw redirect(303, '/')
    }*/
}