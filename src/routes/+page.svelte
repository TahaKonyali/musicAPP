<script lang="ts">
	import { goto } from "$app/navigation";
    import type { PageData } from "./$types";

    export let data: PageData
</script>

<div class="mt-16 mx-10">
<h1 class="text-3xl mx-5 my-10 font-semibold">Music List</h1>
<div class="overflow-auto">
    {#each data.feed as musicCard (musicCard.id)}
        <div class="bg-gray-800 py-2 px-3 grid grid-cols-2 gap-3 my-4 rounded-xl">
            <button class="text-xl font-medium text-left" on:click={() => goto(`/mc/${musicCard.id}`)}>{musicCard.title}</button>
            <h1 class="text-white/50 text-right px-2">{musicCard.user?.name}</h1>
            <h1 class="text-lg">{musicCard.creator}</h1>
            <p class="col-span-2">{musicCard.content}</p>
        </div>
    {/each}
</div>
</div>