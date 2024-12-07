<script lang="ts">
	import type { SelectOption } from '$lib/types/input'
	import { Label, Select } from 'flowbite-svelte'

	export let label: string = ''
	export let id: string = ''
	export let value: any
	export let options: SelectOption[] = []
	export let defaultSelected: string | undefined = undefined
	export let divClass: string = ''

	const isSelected = (option: SelectOption) => {
		return option.value === defaultSelected
	}
</script>

<div class="flex flex-col {divClass}">
	<Label for={id}>{label}</Label>
	<Select {id} bind:value {...$$restProps} {options}>
		{#each options as option}
			<option value={option.value} selected={isSelected(option)}>{option.label}</option>
		{/each}
	</Select>
</div>
