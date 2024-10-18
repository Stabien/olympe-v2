<script lang="ts">
	import { enableFieldErrors, hasValidationError } from '$lib/operations/validators'
	import type { FieldValidation } from '$lib/types/validator'
	import { setContext } from 'svelte'
	import { writable } from 'svelte/store'

	export let onSubmit: () => void

	let fieldValidationStore = writable<Record<string, FieldValidation>>({})

	const displayValidationErrors = () => {
		const updatedFieldValidation = enableFieldErrors(fields)

		fieldValidationStore.set(updatedFieldValidation)
	}

	const handleSubmit = () => {
		displayValidationErrors()

		if (!hasValidationError(fields)) {
			onSubmit()
		}
	}

	$: fields = $fieldValidationStore

	setContext('formValidation', {
		fieldValidationStore
	})
</script>

<form on:submit|preventDefault={handleSubmit} {...$$restProps}>
	<slot />
</form>
