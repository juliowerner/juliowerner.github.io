<script>
	import SocialMedia from './SocialMedia.svelte';

	let year = new Date().getFullYear();
</script>

<footer class="border-t border-base-300 mt-8">
	<SocialMedia />
	<div class="my-2 text-center">
		<span class="text-md">Julio Werner's Blog © {year}</span>
	</div>
</footer>
