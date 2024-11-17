<script lang="ts">
	import { getValidationError, updateValidationStore } from '$lib/utils/form/validation'
	import type { FieldValidator, ValidationStore } from '$lib/types/validator'
	import { Input, Label, Helper } from 'flowbite-svelte'
	import { getContext, onMount } from 'svelte'
	import { slide } from 'svelte/transition'

	export let id: string = ''
	export let label: string = ''
	export let value: string = ''
	export let divClass: string = ''
	export let labelClass: string = ''
	export let inputClass: string = ''
	export let validators: FieldValidator[] = []

	const validationStore = getContext<ValidationStore>('formValidation')

	$: validationError = getValidationError(validators, value)
	$: canDisplayError = Boolean($validationStore?.[id]?.canDisplayError)
	$: isErrorVisible = Boolean(validationError && canDisplayError)

	onMount(() => updateValidationStore(validationStore, id, !validationError))
</script>

<div class="flex flex-col {divClass} space-y-1">
	<Label class={labelClass} for={id}>{label}</Label>
	<Input
		{id}
		class="p-3 {inputClass}"
		color={isErrorVisible ? 'red' : 'base'}
		bind:value
		on:input={() => updateValidationStore(validationStore, id, !validationError)}
		{...$$restProps}
	/>

	{#if isErrorVisible}
		<div transition:slide={{ duration: 300 }}>
			<Helper color="red">{validationError ?? ''}</Helper>
		</div>
	{/if}
</div>
