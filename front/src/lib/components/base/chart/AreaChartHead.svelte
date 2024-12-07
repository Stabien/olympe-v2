<script lang="ts">
	import AppSelect from '../input/AppSelect.svelte'
	import { ChartPeriodValues } from '$lib/types/chartTypes'
	import { Badge } from 'flowbite-svelte'

	export let title: string
	export let evolution: number
	export let value: ChartPeriodValues

	const selectOptions = [
		{
			label: 'Dernière semaine',
			value: ChartPeriodValues.lastWeek
		},
		{
			label: 'Dernier mois',
			value: ChartPeriodValues.lastMounth
		},
		{
			label: 'Derniers 6 mois',
			value: ChartPeriodValues.lastSixMounths
		},
		{
			label: 'Dernière année',
			value: ChartPeriodValues.lastYear
		},
		{
			label: 'Tout',
			value: ChartPeriodValues.all
		}
	]
</script>

<div class="flex flex-row justify-between">
	<div class="flex flex-row items-center space-x-4">
		<h1 class="text-md font-bold text-gray-800">{title}</h1>
		<Badge color={evolution >= 0 ? 'green' : 'red'}
			>{evolution >= 0 ? '+' : '-'} {evolution} kg</Badge
		>
	</div>
	<AppSelect options={selectOptions} bind:value />
</div>
