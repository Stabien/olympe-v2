<script lang="ts">
	import {
		Table,
		TableBody,
		TableBodyCell,
		TableBodyRow,
		TableHead,
		TableHeadCell
	} from 'flowbite-svelte';

	let searchTerm = '';
	let items = [
		{ date: new Date(), exercise: 'Dips lestés', reps: [8, 8, 8, 7], weight: 25 },
		{ date: new Date(), exercise: 'Tractions', reps: [8, 8, 8, 7], weight: 25 },
		{ date: new Date(), exercise: 'Levé de jambes', reps: [8, 8, 8, 7], weight: 25 },
		{ date: new Date(), exercise: 'Pistol squats', reps: [8, 8, 8, 7], weight: 25 }
	];
</script>

<Table placeholder="Search by maker name" bind:inputValue={searchTerm} hoverable={true} shadow>
	<TableHead>
		<TableHeadCell>Date</TableHeadCell>
		<TableHeadCell>Exercice</TableHeadCell>
		<TableHeadCell>Répétitions</TableHeadCell>
		<TableHeadCell>Poids</TableHeadCell>
	</TableHead>
	<TableBody tableBodyClass="divide-y">
		{#each items as item}
			<TableBodyRow>
				<TableBodyCell>{item.date.toLocaleDateString()}</TableBodyCell>
				<TableBodyCell>{item.exercise}</TableBodyCell>
				<TableBodyCell>{item.reps}</TableBodyCell>
				<TableBodyCell>{item.weight}</TableBodyCell>
			</TableBodyRow>
		{/each}
	</TableBody>
</Table>
