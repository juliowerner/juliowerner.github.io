<script>
	import Footer from '$lib/components/Footer.svelte';
	import Header from '$lib/components/Header.svelte';
	import '../app.css';

	let { children } = $props();
</script>

<Header />
<main class="container mx-auto grow">
	{@render children()}
</main>
<Footer />
