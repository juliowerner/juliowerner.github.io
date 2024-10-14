<script>
	import SocialMedia from './SocialMedia.svelte';

	let year = new Date().getFullYear();
</script>

<footer class="bg-surface-container-high border-t border-outline mt-8">
	<SocialMedia />
	<div class="my-2 text-center">
		<span class="text-md">Julio Werner's Blog © {year}</span>
	</div>
</footer>
