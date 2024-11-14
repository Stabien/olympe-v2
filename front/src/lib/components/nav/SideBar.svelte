<script lang="ts">
	import { page } from '$app/stores'
	import { Sidebar, SidebarGroup, SidebarItem, SidebarWrapper } from 'flowbite-svelte'
	import { RocketSolid } from 'flowbite-svelte-icons'

	export let routes: any[]

	$: activeUrl = $page.url.pathname
</script>

<Sidebar
	{activeUrl}
	class="z-40 h-screen w-96 -translate-x-full transition-transform sm:translate-x-0 px-4"
>
	<SidebarWrapper class="h-full bg-white p-0">
		<SidebarGroup class="mt-3">
			<SidebarItem label="Olympe" class="mx-3 px-4 py-3">
				<RocketSolid slot="icon" />
			</SidebarItem>
		</SidebarGroup>
		<SidebarGroup border>
			{#each routes as route}
				<SidebarItem
					label={route.label}
					class="mx-3 rounded-md px-4 py-3 {activeUrl !== route.path ? 'hover:bg-slate-100' : ''} text-md"
					href={route.path}
					active={activeUrl === route.path}
					activeClass="flex items-center bg-primary-600 text-white"
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
