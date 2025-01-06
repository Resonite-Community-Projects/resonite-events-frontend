<script lang="ts">
	import { fly } from 'svelte/transition';
	export let pathname = '';
</script>

{#key pathname}
	<div in:fly={{ x: -10, duration: 200, delay: 200 }} out:fly={{ x: 5, duration: 200 }} class="flex flex-col flex-auto">
		<slot />
	</div>
{/key}
