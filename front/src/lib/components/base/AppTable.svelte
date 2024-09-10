<script lang="ts">
	import {
		Button,
		Pagination,
		Table,
		TableBody,
		TableBodyCell,
		TableBodyRow,
		TableHead,
		TableHeadCell
	} from 'flowbite-svelte';
	import { ChevronLeftOutline, ChevronRightOutline } from 'flowbite-svelte-icons';

	export let columns: any[] = [];

	export let rows: Record<string, any>[] = [];

	export let hasActionButton: boolean = false;
	export let onActionButtonClick: (() => void) | undefined = undefined;
	export let actionButtonLabel: string | undefined = undefined;
</script>

<Table hoverable={true} shadow>
	<TableHead>
		{#each columns as column}
			<TableHeadCell>{column.label}</TableHeadCell>
		{/each}
		{#if hasActionButton}
			<TableHeadCell></TableHeadCell>
		{/if}
	</TableHead>
	<TableBody tableBodyClass="divide-y">
		{#each rows as row}
			<TableBodyRow>
				{#each columns as column}
					<TableBodyCell>{row[column.key]}</TableBodyCell>
				{/each}
				{#if hasActionButton}
					<TableBodyCell tdClass="w-fit pr-3">
						<div class="mx-auto mr-0 w-fit">
							<Button on:click={onActionButtonClick} size="xs">{actionButtonLabel}</Button>
						</div>
					</TableBodyCell>
				{/if}
			</TableBodyRow>
		{/each}
	</TableBody>
	<tfoot class="w-full">
		<tr>
			<th colspan={columns.length + 1} class="p-3">
				<div class="mx-auto mr-0 w-fit">
					<Pagination>
						<svelte:fragment slot="prev">
							<span class="sr-only">Previous</span>
							<ChevronLeftOutline class="h-6 w-6" />
						</svelte:fragment>
						<svelte:fragment slot="next">
							<span class="sr-only">Next</span>
							<ChevronRightOutline class="h-6 w-6" />
						</svelte:fragment>
					</Pagination>
				</div>
			</th>
		</tr>
	</tfoot>
</Table>
