<script lang="ts">
	import { enableFieldErrors, hasValidationError } from '$lib/utils/form/validation'
	import type { FieldValidationState } from '$lib/types/validator'
	import { setContext } from 'svelte'
	import { writable } from 'svelte/store'

	export let onSubmit: () => void

	let validationStore = writable<Record<string, FieldValidationState>>({})

	const displayValidationErrors = (fields: Record<string, FieldValidationState>) => {
		validationStore.set(enableFieldErrors(fields))
	}

	const handleSubmit = () => {
		if (hasValidationError($validationStore)) {
			displayValidationErrors($validationStore)
		} else {
			onSubmit()
		}
	}

	setContext('formValidation', {
		validationStore
	})
</script>

<form on:submit|preventDefault={handleSubmit} {...$$restProps}>
	<slot />
</form>
