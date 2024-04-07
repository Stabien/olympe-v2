<script lang="ts">
	import { Label, Select } from 'flowbite-svelte';
	import type { SelectOption } from '../../../types';

	export let label: string = '';
	export let id: string = '';
	export let value: any;
	export let items: SelectOption[] = [];
	export let defaultSelected: SelectOption | undefined = undefined;
	export let divClass: string = '';

	console.log('default selected', defaultSelected);

	const isSelected = (item: SelectOption) => {
		console.log(item.value === defaultSelected?.value);
		return item.value === defaultSelected?.value;
	};
</script>

<div class="flex flex-col {divClass}">
	<Label for={id}>{label}</Label>
	<Select {id} bind:value {...$$restProps}>
		{#each items as item, index}
			{#if isSelected(item)}
				<p>test</p>
				<option value={item.value}>{item.name}</option>
			{:else}
				<option value={item.value}>{item.name}</option>
			{/if}
		{/each}
	</Select>
</div>
