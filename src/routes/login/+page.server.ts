import { fail, redirect } from '@sveltejs/kit';
import type { Actions } from './$types';
import { loginuser } from '$lib/user.model';

export const actions: Actions = {
    default: async (event) => {
        const data = Object.fromEntries(await event.request.formData());

        console.log("Form data:", data); // Log form data

        const { email, password } = data as { email: string; password: string };

        console.log("Email:", email); // Log email
        console.log("Password:", password); // Log password

        if (!email || !password) {
            console.log("Email or password missing:", email, password); // Log missing email or password
            return fail(400, { error: "Email and password are required." });
        }

        const { token, error } = await loginuser(email, password);

        if (error) {
            console.log("Error logging in user:", error); // Log error logging in user
            return fail(401, { error: "Invalid email or password." });
        }

        console.log("User logged in successfully:", token); // Log user logged in successfully

        // Assuming you set user session or token here
        // await event.locals.session.set({ token });

        throw redirect(303, `/cards`); // Redirect to dashboard after login
    }
};