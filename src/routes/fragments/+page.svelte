<script>
	import SectionWrapper from '$lib/components/SectionWrapper.svelte';
	import Badge from '$lib/components/Badge.svelte';
	export let data;
</script>

<SectionWrapper>
	<h1 class="text-3xl font-bold">Fragments</h1>
	<p>Little pills of knowledge for further use.</p>
	{#each data.fragments as fragment}
		<a href={fragment.path} class="block p-4 border border-base-300 rounded-md my-2">
			<div class="flex flex-row">
				<p>{fragment.meta.date}</p>
				{#each fragment.meta.tags as tag}
					<Badge name={tag} />
				{/each}
			</div>
			<h2 class="text-xl font-bold">{fragment.meta.title}</h2>
		</a>
	{/each}
</SectionWrapper>
