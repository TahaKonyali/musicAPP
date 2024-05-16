import database from "$lib/database";
import { fail, redirect } from '@sveltejs/kit';
import type { Actions } from "./$types";

export const actions = {
    create: async ({ request }) => {
        const data = await request.formData();

        let title = data.get("title");
        let creator = data.get("creator");
        let description = data.get("description");
        let content = data.get("content");
        let language = data.get("language");
        let userEmail = data.get("userEmail");

        if (!title || !creator || !description ||!content || !userEmail || !language) {
            return fail(400, { creator, content, description, language, userEmail, title, missing: true });
        }

        if (typeof title != "string" || typeof creator != "string" || typeof description != "string" || typeof content != "string" || typeof userEmail != "string" || typeof language != "string") {
            return fail(400, { incorrect: true })
        }

        await database.musicCard.create({
            data: {
                title,
                creator,
                description,
                content,
                language,
                user: { connect: { email: userEmail } },
                published: true
            },
        });

        throw redirect(303, '/')
    }
} satisfies Actions;