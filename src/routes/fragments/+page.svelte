<script>
	import SectionWrapper from '$lib/components/SectionWrapper.svelte';
	import Badge from '$lib/components/Badge.svelte';
	export let data;
</script>

<SectionWrapper>
	<h1 class="text-3xl font-bold">Fragments</h1>
	<p>Little pills of knowledge for further use.</p>
	{#each data.fragments as fragment}
    {@const Component = fragment.content}
    <div class="block p-4 dark:border border-outline rounded-md my-4 shadow-lg bg-surface-container-highest text-on-container">
        <div class="flex flex-row">
            <p>{fragment.meta.date}</p>
            {#each fragment.meta.tags as tag}
                <Badge name={tag} />
            {/each}
        </div>
        <article class="prose lg:prose-lg dark:prose-invert mx-auto">
            <h2 class="text-xl text-center font-bold py-4">{fragment.meta.title}</h2>
            <Component />
        </article>
    </div>
	{/each}
</SectionWrapper>
