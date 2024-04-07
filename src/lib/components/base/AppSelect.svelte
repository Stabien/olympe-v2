<script lang="ts">
	import { Label, MultiSelect, Select } from 'flowbite-svelte';
	import type { SelectOption } from '../../../types';

	export let label: string = '';
	export let id: string = '';
	export let selected: any;
	export let items: SelectOption[] = [];
	export let defaultSelected: string | undefined = undefined;
	export let divClass: string = '';

	const isSelected = (item: SelectOption) => {
		return item.value === defaultSelected;
	};
</script>

<div class="flex flex-col {divClass}">
	<Label for={id}>{label}</Label>
	<Select {id} bind:value={selected} {...$$restProps} {items}>
		{#each items as item}
			<option value={item.value} selected={isSelected(item)}>{item.name}</option>
		{/each}
	</Select>
</div>
