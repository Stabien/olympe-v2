<script lang="ts">
	import BottomBar from './BottomBar.svelte'
	import SideBar from './SideBar.svelte'

	export let routes: any[]

	$: innerWidth = 0
</script>

<svelte:window bind:innerWidth />

{#if innerWidth < 768 && innerWidth > 0}
	<BottomBar {routes} />
{:else if innerWidth >= 768}
	<SideBar {routes} />
{/if}
