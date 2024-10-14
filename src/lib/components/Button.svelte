<script lang="ts">
	import { goto } from '$app/navigation';

	class ButtonProps {
		name: string;
		href: string;

		constructor(name: string, href: string = '/') {
			this.name = name;
			this.href = href;
		}
	}

	let props: ButtonProps = $props();

	function openLink() {
		goto(props.href);
	}
</script>

<button
	onclick={() => openLink()}
	class="px-3 py-1.5 text-md border-b-4 border-primary text-on-surface-container hover:border-on-primary hover:font-bold"
>
	{props.name}
</button>
