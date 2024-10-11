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
	class="px-3 py-1.5 rounded-full text-sm bg-primary text-primary-content hover:bg-primary-focus hover:text-primary-content"
>
	{props.name}
</button>
