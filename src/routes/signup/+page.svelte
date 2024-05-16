<script lang="ts">
        import type { ActionData } from "./$types";
        import { enhance } from "$app/forms";
        import { redirect } from '@sveltejs/kit';
    
        export let form: ActionData;
    
        // Function to handle successful signup and redirect to login page
        const handleSignupSuccess = () => {
            throw redirect(303, '/login'); // Redirect to login page
        }
    </script>
    
    <div class="h-screen flex flex-col space-y-6 lg:px-20">
        <form method="post" use:enhance class="grid grid-cols-1 gap-4 lg:px-48 md:px-16" on:success={handleSignupSuccess}>
            <h1 class="text-center text-4xl font-medium mb-1 mt-10 border-b-2 pb-4">Sign up</h1>
            {#if form?.error}
                <div class="notice error">{form.error}</div>
            {/if}
            <div class="flex flex-col">
                <label for="name">Name:</label>
                <input
                    class="rounded-md bg-white/60 text-black px-2 py-0.5 placeholder:text-black focus:outline-stone-400"
                    placeholder="Name"
                    type="text"
                    name="name"
                    id="name"
                    required
                />
            </div>
            <div class="flex flex-col">
                <label for="email">Email:</label>
                <input
                    class="rounded-md bg-white/60 text-black px-2 py-0.5 placeholder:text-black focus:outline-stone-400"
                    placeholder="Email address"
                    type="email"
                    name="userEmail"
                    id="userEmail"
                    required
                />
            </div>
            <div class="flex flex-col">
                <label for="password">Password:</label>
                <input
                    class="rounded-md bg-white/60 text-black px-2 py-0.5 placeholder:text-black focus:outline-stone-400"
                    placeholder="Password"
                    type="password"
                    name="password"
                    id="password"
                    required
                />
            </div>
            <div class="flex flex-col">
                <label for="confirm_password">Confirm Password:</label>
                <input
                    class="rounded-md bg-white/60 text-black px-2 py-0.5 placeholder:text-black focus:outline-stone-400"
                    placeholder="Password Confirmation"
                    type="password"
                    name="confirmPassword"
                    id="confirm_password"
                    required
                />
            </div>
            <div class="text-center">
                <button type="submit" class="bg-blue-900/40 font-medium py-2 px-10 rounded-xl w-fit">Create Account</button>
                <a class="bg-white/10 px-5 py-2 rounded-xl ml-2" href="/">Cancel</a>
            </div>
        </form>
        <div class="text-center mt-4">
        </div>
    </div>
    