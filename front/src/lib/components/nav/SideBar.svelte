<script lang="ts">
	import { page } from '$app/stores'
	import { Sidebar, SidebarBrand, SidebarGroup, SidebarItem, SidebarWrapper } from 'flowbite-svelte'

	export let routes: any[]

	$: activeUrl = $page.url.pathname
</script>

<Sidebar {activeUrl} class="z-40 min-h-screen w-96 border-slate-200 px-4 pt-8">
	<SidebarWrapper class="h-full bg-white p-0">
		<SidebarGroup>
			{#each routes as route}
				<SidebarItem
					label={route.label}
					class="mx-3 rounded-md px-4 py-3 {activeUrl !== route.path
						? 'hover:bg-slate-100'
						: ''} text-md"
					href={route.path}
					active={activeUrl === route.path}
					activeClass="flex items-center bg-primary-600 text-white"
					nonActiveClass="flex items-center text-base text-black-300"
				>
					<svelte:component this={route.icon} slot="icon" />
				</SidebarItem>
			{/each}
		</SidebarGroup>
	</SidebarWrapper>
</Sidebar>
