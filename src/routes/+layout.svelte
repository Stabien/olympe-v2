<script lang="ts">
	import Navbar from '$lib/components/nav/Navbar.svelte';
	import '../app.pcss';
	import {
		ChartPieSolid,
		GridSolid,
		UserSolid,
		ArrowRightToBracketOutline,
		EditSolid
	} from 'flowbite-svelte-icons';
	import type { Route } from '../types';

	const routes: Route[] = [
		{
			label: 'Dashboard',
			path: '/dashboard',
			icon: ChartPieSolid
		},
		{
			label: 'Mes repas',
			path: '/meals',
			icon: GridSolid
		},
		{
			label: 'Mon programme',
			path: '/program',
			icon: UserSolid
		},
		{
			label: 'Mes séances',
			path: '/sessions',
			icon: EditSolid
		},
		{
			label: 'Paramètres',
			path: '/',
			icon: ArrowRightToBracketOutline
		}
	];
</script>

<main class="flex h-full w-full flex-row">
	<Navbar {routes} />
	<section class="w-full px-12 py-5">
		<slot />
	</section>
</main>

<style lang="css">
	:global(body) {
		font-family: 'Roboto';
	}

	:global(.pac-container) {
		font-family: 'Roboto';
		border-radius: 8px;
		font-size: 16px;
	}

	:global(.pac-item) {
		padding: 8px 10px;
		cursor: pointer;
		font-size: 14px;
	}

	:global(.pac-item-query) {
		font-size: 14px;
	}

	:global(.pac-matched) {
		color: blue;
	}

	:global(.pac-icon) {
		display: none;
	}

	:global(.pac-container.pac-logo::after) {
		display: none;
	}
</style>
