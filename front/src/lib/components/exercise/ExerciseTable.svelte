<script lang="ts">
	import { exerciseResult } from '../../../fixtures';
	import AppTable from '../base/AppTable.svelte';

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

<AppTable {rows} {columns} />
