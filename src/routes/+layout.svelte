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
			path: '/',
			icon: ChartPieSolid
		},
		{
			label: 'Mes repas',
			path: '/',
			icon: GridSolid
		},
		{
			label: 'Mon programme',
			path: '/',
			icon: UserSolid
		},
		{
			label: 'Historique des séances',
			path: '/',
			icon: EditSolid
		},
		{
			label: 'Paramètres',
			path: '/',
			icon: ArrowRightToBracketOutline
		}
	];
</script>

<Navbar {routes} />
<slot />

<style lang="css">
	:global(body) {
		font-family: 'Roboto';
		padding: 10px;
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
