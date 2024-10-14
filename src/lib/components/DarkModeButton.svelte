<script>
	import { browser } from '$app/environment';

	function getSystemTheme() {
		if (!('matchMedia' in window)) return 'light';
		return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
	}
	let darkMode = $state(false);

	if (browser) {
		const theme = localStorage.getItem('theme');
		if (theme) {
			darkMode = theme === 'dark';
		} else {
			darkMode = getSystemTheme() === 'dark';
		}
	}

	$effect(() => {
		if (darkMode) {
			localStorage.setItem('theme', 'dark');
			window.document.body.classList.add('dark');
		} else {
			localStorage.setItem('theme', 'light');
			window.document.body.classList.remove('dark');
		}
	});
</script>

{#if darkMode}
	<button class="hover:text-primary hover:font-bold" onclick={() => (darkMode = false)}>
		<span class="material-symbols-outlined">light_mode</span>
	</button>
{:else}
	<button class="hover:text-primary hover:font-bold" onclick={() => (darkMode = true)}>
		<span class="material-symbols-outlined">dark_mode</span>
	</button>
{/if}
