<script>
	import SectionWrapper from '$lib/components/SectionWrapper.svelte';
	import Badge from '$lib/components/Badge.svelte';
	export let data;
</script>

<SectionWrapper>
	<span class="flex flex-col items-center my-5">
		<h1 class="text-3xl font-bold mr-2">Fragments</h1>
		<h2 class="text-xl font-light">Little pills of thought for further use.</h2>
	</span>
	{#each data.fragments as fragment}
		{@const Component = fragment.content}
		<div
			class="mx-auto w-fit p-5 dark:border border-outline rounded-md my-4 shadow-lg bg-surface-container-highest text-on-container"
		>
			<div class="flex flex-row">
				<p>{fragment.meta.date}</p>
				{#each fragment.meta.tags as tag}
					<Badge name={tag} />
				{/each}
			</div>
			<article class="prose lg:prose-lg dark:prose-invert w-full">
				<h2 class="text-xl text-center font-bold py-4">{fragment.meta.title}</h2>
				<Component />
			</article>
		</div>
	{/each}
</SectionWrapper>
