import { fail } from '@sveltejs/kit';
import { redirect } from '@sveltejs/kit';
import type { Actions } from './$types';
import { createUser } from "$lib/user.model";

const validateEmail = (email: string) => {
    return (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email))
}

export const actions: Actions = {
    default: async (event) => {
        const data = Object.fromEntries(await event.request.formData());

        console.log("Form data:", data); // Log form data

        if (!data.name || !data.userEmail || !data.password) {
            console.log("Missing data:", data); // Log missing data
            return fail(400, { error: "missing data" });
        }

        const { name, userEmail, password, confirmPassword } = data as { name: string; userEmail: string; password: string; confirmPassword: string };

        console.log("Name:", name); // Log name
        console.log("User email:", userEmail); // Log user email

        if (!name || !userEmail) {
            console.log("Name or email missing:", name, userEmail); // Log missing name or email
            return fail(400, { name, userEmail, missing: true });
        }

        if (!password || !confirmPassword) {
            console.log("Passwords don't match:", password, confirmPassword); // Log passwords
            return fail(400, { error: "passwords don't match" });
        }

        console.log("Validating email:", userEmail); // Log validating email
        if (!validateEmail(userEmail)) {
            console.log("Invalid email:", userEmail); // Log invalid email
            return fail(400, { name, incorrect: true });
        }

        console.log("Creating user:", name, userEmail); // Log creating user
        const { error } = await createUser(name, userEmail, password);

        if (error) {
            console.log("Error creating user:", error); // Log error creating user
            return fail(500, { error });
        }

        console.log("User created successfully:", name, userEmail); // Log user created successfully
        throw redirect(303, `/login`);
    }
};
