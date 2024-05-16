<script lang="ts">
    import '../app.css'
</script>

<div class="grid lg:grid-cols-4 md:grid-cols-3 h-screen bg-gray-900 pr-5 text-white px-auto">
    <aside class="flex flex-col font-medium justify-between bg-gray-950 px-5 pt-5 pb-10 w-auto m-5 rounded-2xl">
        <div>
            <a href="/"><h1 class="text-4xl font-bold">Lyrics</h1></a>
        </div>
        <div class="text-center grid grid-cols-1 gap-5 border-t-2">
            <a href="/cards" class="mt-7 mx-auto w-fit h-10 place-content-center bg-white/60 px-10 py-3 rounded-xl text-black hover:bg-white/40">All Posts</a>
            <div class="mt-10 h-10">
                <a href="/create" class="bg-white/60 px-3 py-3 rounded-xl text-black hover:bg-white/40">Post some Lyrics</a>
            </div>
        <div class="flex justify-between text-center">
            <a href="signup" class="mx-auto">Register</a>
        </div>
        </div>
    </aside>
    <div class="w-full lg:col-span-3 md:col-span-2 my-5 rounded-2xl bg-black/30 overflow-auto px-5">
        <slot />
    </div>
</div>