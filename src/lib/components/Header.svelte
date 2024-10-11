<script>
	import DarkModeButton from './DarkModeButton.svelte';
	import Button from './Button.svelte';
</script>

<header class="flex flex-col z-20 sticky top-0 bg-base-200 border-b border-base-300 shadow-md">
	<div class="max-w-[1400px] mx-auto w-full flex items-center justify-around p-4 py-6">
		<a href="/">
			<h2 class="text-2xl font-bold">Julio Werner</h2>
		</a>
		<nav class="flex text-base items-center space-x-4">
			<Button name="Home" href="/" />
			<Button name="Fragments" href="/fragments" />
		</nav>
		<div class="max-sm:hidden">
			<DarkModeButton />
		</div>
	</div>
</header>
