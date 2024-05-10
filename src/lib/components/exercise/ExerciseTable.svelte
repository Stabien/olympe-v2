<script lang="ts">
	import { exerciseResult } from '../../../fixtures';
	import Table from '../table/Table.svelte';

	export let rows = [
		exerciseResult,
		exerciseResult,
		exerciseResult,
		exerciseResult,
		exerciseResult
	];

	const columns = [
		{
			key: 'date',
			label: 'Date'
		},
		{
			key: 'weight',
			label: 'Poids'
		},
		{
			key: 'sets',
			label: 'Nombre de séries'
		},
		{
			key: 'repetitions',
			label: 'Répétitions'
		},
		{
			key: 'restTime',
			label: 'Temps de repos'
		}
	];
</script>

<Table {rows} {columns} />
