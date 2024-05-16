<script lang="ts">
    import { enhance } from "$app/forms";
    import { redirect } from '@sveltejs/kit';

    // Function to handle successful login and redirect to dashboard
    const handleLoginSuccess = () => {
        throw redirect(303, '/'); // 
    }
</script>

<div class="h-screen flex flex-col space-y-6 lg:px-20">
    <form method="post" use:enhance class="grid grid-cols-1 gap-4 lg:px-48 md:px-16" on:success={handleLoginSuccess}>
        <h1 class="text-center text-4xl font-medium mb-1 mt-10 border-b-2 pb-4">Login</h1>
        <div class="flex flex-col">
            <label for="email">Email:</label>
            <input
                class="rounded-md bg-white/60 text-black px-2 py-0.5 placeholder:text-black focus:outline-stone-400"
                placeholder="Email address"
                type="email"
                name="email"
                id="email"
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
        <div class="text-center">
            <button type="submit" class="bg-blue-900/40 font-medium py-2 px-10 rounded-xl w-fit">Login</button>
            <a class="bg-white/10 px-5 py-2 rounded-xl ml-2" href="/">Cancel</a>
        </div>
    </form>
 </div>

