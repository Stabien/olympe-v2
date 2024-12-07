<script lang="ts">
	import { ChevronDownOutline } from 'flowbite-svelte-icons'

	import AppButton from '../AppButton.svelte'
	import { Dropdown, DropdownItem } from 'flowbite-svelte'
	import type { SelectOption } from '$lib/types/input'
	import { onMount } from 'svelte'

	export let placeholder: string | undefined = undefined
	export let options: SelectOption[]
	export let value: string

	let selectedLabel: string | null = null
	let isOpened = false

	const onOptionClick = (option: SelectOption) => {
		value = option.value
		isOpened = false
	}

	onMount(() => {
		if (!value) {
			selectedLabel = options[0].label
			value = options[0].value
		}
	})

	// Allow label to be modified when value is updated by the parent
	$: {
		selectedLabel = options.find((option) => option.value === value)?.label ?? ''
	}
</script>

<div>
	<AppButton color="light" class="w-40 justify-between px-3 py-2 text-left">
		{selectedLabel ?? placeholder}
		<ChevronDownOutline class="ms-1.5 h-2.5 w-2.5" />
	</AppButton>

	<Dropdown bind:open={isOpened}>
		{#each options as option (option.value)}
			<DropdownItem on:click={() => onOptionClick(option)}>{option.label}</DropdownItem>
		{/each}
	</Dropdown>
</div>
