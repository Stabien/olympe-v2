<script lang="ts">
	import { page } from '$app/stores';
	import { Sidebar, SidebarGroup, SidebarItem, SidebarWrapper } from 'flowbite-svelte';
	import { RocketSolid } from 'flowbite-svelte-icons';

	export let routes: any[];

	$: activeUrl = $page.url.pathname;
</script>

<Sidebar
	{activeUrl}
	class="z-40 h-screen w-64 -translate-x-full transition-transform sm:translate-x-0"
>
	<SidebarWrapper class="h-full p-0">
		<SidebarGroup class="mt-3">
			<SidebarItem label="Olympe" class="rounded-none px-6 py-3">
				<RocketSolid slot="icon" />
			</SidebarItem>
		</SidebarGroup>
		<SidebarGroup border class="space-y-0">
			{#each routes as route}
				<SidebarItem
					label={route.label}
					class="duration-50 space-0 m-0 rounded-none px-6 py-4 hover:bg-slate-100 dark:text-gray-400 dark:hover:text-primary-500"
					href={route.path}
					active={activeUrl === route.path}
					activeClass="flex items-center text-base bg-slate-100 text-primary-600"
					nonActiveClass="flex items-center text-base text-black-300"
				>
					<svelte:fragment slot="icon">
						<svelte:component this={route.icon} />
					</svelte:fragment>
				</SidebarItem>
			{/each}
		</SidebarGroup>
	</SidebarWrapper>
</Sidebar>
