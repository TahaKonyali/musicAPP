<script lang="ts">
	import type { ActionData } from './$types';

	export let form: ActionData;
</script>

<div class="lg:px-20">
	<form action="?/create" method="post" class="grid grid-cols-1 gap-4 lg:px-48 md:px-16">
		<h1 class="text-center text-4xl font-medium mb-1 mt-10 border-b-2 pb-4">Post Lyrics</h1>
		{#if form?.missing}<p class="error">Missing field required!</p>{/if}
        <label for="title">Song Title:</label>
		<input
		   id="title"
			name="title"
			placeholder="Title"
			type="text"
            class="rounded-md bg-white/60 text-black px-2 py-0.5 placeholder:text-black focus:outline-stone-400"
			value={form?.title ?? ''}
		/>
        <label for="userEmail">Your Email:</label>
		<input
			id="userEmail"
			name="userEmail"
			placeholder="Author email address"
			type="email"
            class="rounded-md bg-white/60 text-black px-2 py-0.5 placeholder:text-black focus:outline-stone-400"
			value={form?.userEmail ?? ''}
		/>
        <label for="language">Song Language:</label>
		<input id="language" type="text" name="language" class="rounded-md bg-white/60 placeholder:text-black text-black px-2 py-0.5 focus:outline-stone-400"
        placeholder="Language" value={form?.language ?? ''} />
        <label for="artist">Artist Name:</label>
		<input
			id="artist"
			type="text"
			name="creator"
			placeholder="Artist"
            class="rounded-md bg-white/60 text-black px-2 py-0.5 placeholder:text-black focus:outline-stone-400"
			value={form?.title ?? ''}
		/>
        <label for="description">Your Description:</label>
		<input
			id="description"
			type="text"
			name="description"
			placeholder="Describe the Song"
            class="rounded-md bg-white/60 text-black px-2 py-0.5 placeholder:text-black focus:outline-stone-400"
			value={form?.description ?? ''}
		/>
        <label for="content">Song Lyrics:</label>
		<textarea id="content" name="content" placeholder="Your Lyrics go here..." class="placeholder:text-black rounded-md bg-white/60 text-black px-2 py-0. overflow-auto focus:outline-stone-400"
        rows="10" />
        <div class="text-center">
		<button type="submit" class="bg-blue-900/40 font-medium py-2 px-10 rounded-xl w-fit">Create</button>
		<a class="bg-white/10 px-5 py-2 rounded-xl ml-2" href="/"> Cancel </a>
        </div>
	</form>
</div>
