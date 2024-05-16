/*import type {Handle} from "@sveltejs/kit";
import jwt from "jsonwebtoken";
import dataabase from "$lib/database";
import { JWT_SECRET } from "$env/static/private";

const handle: Handle = async ({ event, resolve }) => {
    const authCookie = event.cookies.get('AuthorizationToken');

    if (authCookie) {
        const token = authCookie.split(' ')[1];

        try {
            const jwtUser = jwt.verify(token, JWT_SECRET);
            if (typeof jwtUser === 'string') {
                throw new Error('Something went wrong');
            }

            const user = await dataabase.user.findUnique({
                where: {
                    id: jwtUser.id
                }
            });

            if (!user) {
                throw new Error('User not found');
            }

            const sessionUser = {
                id: user.id,
                email: user.email,
                name: user.name
            };

            event.locals.user = sessionUser;
        } catch (error) {
            console.error(error);
        }
    }

    return await resolve(event);
};

export { handle };*/