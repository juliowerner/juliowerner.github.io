<script>
	import SectionWrapper from '$lib/components/SectionWrapper.svelte';

	export let data;
	const Component = data.content;
</script>

<SectionWrapper>
	<div class="p-6 border border-base-300">
		<h1
			class="text-3xl font-extrabold leading-9 tracking-tight sm:text-4xl sm:leading-10 md:text-5xl md:leading-14"
		>
			{data.title}
		</h1>
		<p class="text-center">{data.date}</p>
	</div>
	<article class="prose xl:prose-xl dark:prose-invert">
		<Component />
	</article>
</SectionWrapper>
