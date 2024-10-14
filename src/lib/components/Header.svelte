<script>
	import DarkModeButton from './DarkModeButton.svelte';
	import Button from './Button.svelte';
</script>

<header class="flex flex-col z-20 sticky top-0 bg-surface-container-high border-b border-outline shadow-md">
	<div class="max-w-[1400px] mx-auto w-full flex items-center justify-around px-4 py-4">
		<a href="/">
			<h2 class="text-2xl font-bold">Julio Werner</h2>
		</a>
		<nav class="flex text-on-container items-center space-x-4">
			<Button name="Home" href="/" />
			<Button name="Fragments" href="/fragments" />
		</nav>
		<div class="max-sm:hidden">
			<DarkModeButton />
		</div>
	</div>
</header>
