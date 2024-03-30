<script lang="ts">
	import { page } from '$app/stores';
	import { Sidebar, SidebarGroup, SidebarItem, SidebarWrapper } from 'flowbite-svelte';
	import { RocketSolid } from 'flowbite-svelte-icons';

	export let routes: any[];

	$: activeUrl = $page.url.pathname;
</script>

<Sidebar
	{activeUrl}
	class="fixed left-0 top-0 z-40 h-screen w-64 -translate-x-full transition-transform sm:translate-x-0"
>
	<SidebarWrapper class="h-full">
		<SidebarGroup>
			<SidebarItem label="Olympe">
				<RocketSolid slot="icon" />
			</SidebarItem>
		</SidebarGroup>
		<SidebarGroup border>
			{#each routes as route}
				<SidebarItem label={route.label}>
					<svelte:component
						this={route.icon}
						slot="icon"
						class="mb-1 h-5 w-5 text-gray-500 group-hover:text-primary-600 dark:text-gray-400 dark:group-hover:text-primary-500"
					/>
				</SidebarItem>
			{/each}
		</SidebarGroup>
	</SidebarWrapper>
</Sidebar>
