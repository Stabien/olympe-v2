<script lang="ts">
	import { BottomNav, BottomNavItem } from 'flowbite-svelte';
	import type { SvelteComponent } from 'svelte';

	export let routes: SvelteComponent[];
</script>

<BottomNav position="absolute" classInner="grid-cols-4">
	{#each routes as route}
		<BottomNavItem btnName={route.label}>
			<svelte:component
				this={route.icon}
				class="mb-1 h-5 w-5 text-gray-500 group-hover:text-primary-600 dark:text-gray-400 dark:group-hover:text-primary-500"
			/>
		</BottomNavItem>
	{/each}
</BottomNav>
