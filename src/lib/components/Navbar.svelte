<script lang="ts">
	import BottomBar from './BottomBar.svelte';
	import SideBar from './SideBar.svelte';

	$: innerWidth = 0;
</script>

<svelte:window bind:innerWidth />

{#if innerWidth < 768 && innerWidth > 0}
	<BottomBar />
{:else if innerWidth >= 768}
	<SideBar />
{/if}
