<script lang="ts">
	import { computeFieldValidation } from '$lib/operations/validators'
	import type { FieldValidationStore, FormValidation, InputValidation } from '$lib/types/validator'
	import { Input, Label, Helper } from 'flowbite-svelte'
	import { getContext, onMount } from 'svelte'
	import { get } from 'svelte/store'
	import { slide } from 'svelte/transition'

	export let id: string = ''
	export let label: string = ''
	export let value: string = ''
	export let divClass: string = ''
	export let labelClass: string = ''
	export let inputClass: string = ''
	export let validation: InputValidation | undefined = undefined

	const formValidationContext = getContext('formValidation') as FormValidation
	const fieldValidationStore = formValidationContext?.fieldValidationStore

	const updateFieldValidation = (
		isValid: boolean,
		fieldValidationStore: undefined | FieldValidationStore
	) => {
		if (!fieldValidationStore) {
			return
		}

		const fields = get(fieldValidationStore)
		const updatedFieldValidation = computeFieldValidation(fields, id, isValid)

		fieldValidationStore.set(updatedFieldValidation)
	}

	$: isValid = !validation || validation.validator(value)
	$: canDisplayError = $fieldValidationStore && $fieldValidationStore[id]?.canDisplayError
	$: isErrorDisplayed = !isValid && canDisplayError

	onMount(() => updateFieldValidation(isValid, fieldValidationStore))
</script>

<div class="flex flex-col {divClass} space-y-1">
	<Label class={labelClass} for={id}>{label}</Label>
	<Input
		{id}
		class={inputClass}
		color={isErrorDisplayed ? 'red' : 'base'}
		bind:value
		on:input={() => updateFieldValidation(isValid, fieldValidationStore)}
		{...$$restProps}
	/>

	{#if isErrorDisplayed}
		<div transition:slide={{ duration: 300 }}>
			<Helper color="red">{validation?.errorMessage}</Helper>
		</div>
	{/if}
</div>
