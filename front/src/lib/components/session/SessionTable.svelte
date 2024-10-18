<script lang="ts">
	import AppTable from '../base/AppTable.svelte';

	export let rows = [
		{
			date: '05/05/2024',
			sessionType: 'Push'
		},
		{
			date: '08/05/2024',
			sessionType: 'Pull'
		},
		{
			date: '10/05/2024',
			sessionType: 'Legs'
		},
		{
			date: '12/05/2024',
			sessionType: 'Push'
		},
		{
			date: '14/05/2024',
			sessionType: 'Pull'
		},
		{
			date: '17/05/2024',
			sessionType: 'Legs'
		},
		{
			date: '19/05/2024',
			sessionType: 'Push'
		},
		{
			date: '21/05/2024',
			sessionType: 'Pull'
		}
	];

	const columns = [
		{
			key: 'date',
			label: 'Date'
		},
		{
			key: 'sessionType',
			label: 'Séance'
		}
	];

	const detailButtonLabel = 'Voir le détail';
	const onDetailButtonClick = () => console.log('test');
</script>

<AppTable
	{rows}
	{columns}
	hasActionButton
	onActionButtonClick={onDetailButtonClick}
	actionButtonLabel={detailButtonLabel}
/>
