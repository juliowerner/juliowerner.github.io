<script>
	import DarkModeButton from './DarkModeButton.svelte';
</script>

<header class="flex flex-col z-20 sticky top-0 bg-base-100 border-b border-gray-500">
	<div class="max-w-[1400px] mx-auto w-full flex items-center justify-around p-4 py-6">
		<a href="/">
			<h2 class="text-2xl font-bold">Julio Werner</h2>
		</a>
		<nav class="flex text-base items-center space-x-4">
			<a href="/" class="px-3 py-1.5 rounded-full text-sm hover:bg-base-200">About</a>
		</nav>
		<div class="max-sm:hidden">
			<DarkModeButton />
		</div>
	</div>
</header>
