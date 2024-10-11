<script lang="ts">
	export let videoId: string;
	export let title: string = 'YouTube video player';
	export let width: number = 560;
	export let height: number = 315;

	$: src = `https://www.youtube.com/embed/${videoId}`;
</script>

<div class="video-container">
	<iframe
		{width}
		{height}
		{src}
		{title}
		frameborder="0"
		allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
		allowfullscreen
	></iframe>
</div>

<style>
	.video-container {
		position: relative;
		padding-bottom: 56.25%; /* 16:9 aspect ratio */
		height: 0;
		overflow: hidden;
		max-width: 100%;
	}

	iframe {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
	}
</style>
