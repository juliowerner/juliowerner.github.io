<script>
	import DarkModeButton from './DarkModeButton.svelte';
	import Button from './Button.svelte';

    // get svletekit assets path
    import { assets } from '$app/paths';
    const logo = `${assets}/jw.png`;
</script>

<header class="flex flex-col w-full p-1 z-20 sticky bg-surface-container-high dark:border-b border-outline shadow-md">
	<div class="flex w-full items-center justify-around">
		<a href="/">
            <div class="flex flex-row items-center">
            <image src={logo} class="h-10"></image>
			<h2 class="text-2xl font-bold">Julio Werner</h2>
            </div>
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
