<script lang="ts">
	import AppTable from '../base/AppTable.svelte'

	export let rows = [
		{
			date: '05/05/2024',
			weight: 78.8,
			bodyfat: 15.9
		},
		{
			date: '08/05/2024',
			weight: 78.8,
			bodyfat: 15.9
		},
		{
			date: '10/05/2024',
			weight: 78.8,
			bodyfat: 15.9
		},
		{
			date: '12/05/2024',
			weight: 78.8,
			bodyfat: 15.9
		},
		{
			date: '14/05/2024',
			weight: 78.8,
			bodyfat: 15.9
		},
		{
			date: '17/05/2024',
			weight: 78.8,
			bodyfat: 15.9
		},
		{
			date: '19/05/2024',
			weight: 78.8,
			bodyfat: 15.9
		},
		{
			date: '21/05/2024',
			weight: 78.8,
			bodyfat: 15.9
		},
		{
			date: '21/05/2024',
			weight: 78.8,
			bodyfat: 15.9
		}
	]

	const columns = [
		{
			key: 'date',
			label: 'Date'
		},
		{
			key: 'weight',
			label: 'Poids (kg)'
		},
		{
			key: 'bodyfat',
			label: 'Masse grasse (%)'
		}
	]
</script>

<AppTable {rows} {columns} />
