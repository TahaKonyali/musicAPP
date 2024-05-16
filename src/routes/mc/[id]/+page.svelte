<script lang="ts">
    import type { PageData } from './$types'

    export let data: PageData

    const { post } = data
</script>


<div class="md:p-10 lg:p-20">
    <div class="border-b-2 flex justify-between">
        <div>
            <h1 class="text-4xl font-medium mb-3">{post?.title}</h1>
            <h1 class="text-lg">{post?.creator}</h1>
        </div>
        {#if !post?.published}
            <form action="?/publish" method="post">
                <button type="submit" class="bg-blue-800 py-1 px-3 rounded-xl">Not Published</button>
            </form>
            {:else}
            <form action="?/hide" method="post">
                <button type="submit" class="bg-blue-800 py-1 px-3 rounded-xl">Published</button>
            </form>
        {/if}
    </div>
    <div class="mt-7 mb-10">
        <h1 class="my-2 font-medium">{post?.language}</h1>
        <p>{post?.description}</p>
    </div>
    <div>
        <p>{post?.content}</p>
    </div>
    <form action="?/delete" method="post" class="text-center mt-4">
        <input type="hidden" name="id" value="{post.id}" />
        <button type="submit" class="bg-red-700 py-2 px-3 rounded-2xl">
            Delete Post
        </button>
    </form>
</div>