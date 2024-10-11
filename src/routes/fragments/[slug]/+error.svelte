<script>
	import Button from '$lib/components/Button.svelte';
	import SectionWrapper from '$lib/components/SectionWrapper.svelte';
</script>

<SectionWrapper>
	<div
		class="flex flex-col items-start justify-start md:mt-24 md:flex-row md:items-center md:justify-center md:space-x-6"
	>
		<div class="space-x-2 pb-8 pt-6 md:space-y-5">
			<h1
				class="text-6xl font-extrabold leading-9 tracking-tight md:border-r-2 md:px-6 md:text-8xl md:leading-14"
			>
				404
			</h1>
		</div>
		<div class="max-w-md">
			<p class="mb-4 text-xl font-bold leading-normal md:text-2xl">
				Sorry we couldn't find this page.
			</p>
			<p class="mb-8">But dont worry, you can find plenty of other things on our homepage.</p>
			<Button name="Home" href="/" />
		</div>
	</div>
</SectionWrapper>
