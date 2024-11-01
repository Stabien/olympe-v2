<script lang="ts">
	import Navbar from '$lib/components/nav/Navbar.svelte'
	import {
		ChartPieSolid,
		GridSolid,
		UserSolid,
		ArrowRightToBracketOutline,
		EditSolid
	} from 'flowbite-svelte-icons'
	import type { Route } from '../../lib/types'

	const routePrefix = '/app'
	const routes: Route[] = [
		{
			label: 'Dashboard',
			path: `${routePrefix}/dashboard`,
			icon: ChartPieSolid
		},
		{
			label: 'Mes repas',
			path: `${routePrefix}/meals`,
			icon: GridSolid
		},
		{
			label: 'Mon programme',
			path: `${routePrefix}/program`,
			icon: UserSolid
		},
		{
			label: 'Mes séances',
			path: `${routePrefix}/sessions`,
			icon: EditSolid
		},
		{
			label: 'Paramètres',
			path: `${routePrefix}/settings`,
			icon: ArrowRightToBracketOutline
		}
	]
</script>

<main class="flex h-full w-full flex-row">
	<Navbar {routes} />
	<section class="w-full bg-slate-50 px-12 py-5">
		<slot />
	</section>
</main>
