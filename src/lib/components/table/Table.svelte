<script lang="ts">
	import {
		Table,
		TableBody,
		TableBodyCell,
		TableBodyRow,
		TableHead,
		TableHeadCell
	} from 'flowbite-svelte';

  interface Row {
    date: string
    [key: string]: string
  }

  export let columns: string[] = ['date', 'poids', 'temps de repos']
  export let rows: Row[] = [
    {
      date: '08/04/2024',
      'poids': '25 kg',
      'temps de repos': '1m30'
    }
  ]

</script>

<Table hoverable={true} shadow>
	<TableHead>
    {#each columns as column}
		  <TableHeadCell>{column}</TableHeadCell>
    {/each}
	</TableHead>
	<TableBody tableBodyClass="divide-y">
		{#each rows as row}
			<TableBodyRow>
				{#each columns as column}
          <TableBodyCell>{row[column]}</TableBodyCell>
        {/each}
			</TableBodyRow>
		{/each}
	</TableBody>
</Table>
