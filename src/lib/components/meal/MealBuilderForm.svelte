<script lang="ts">
	import { Button } from 'flowbite-svelte';
	import AppSelect from '../base/AppSelect.svelte';
	import AppInput from '../base/AppInput.svelte';

	const addExercise = () => {
		const newExercise = {
			name: '',
			value: ''
		};

		exercises = [...exercises, newExercise];
	};

	const removeExercise = (exerciseIndex: number) => {
		exercises = exercises.filter((exercise, index) => exerciseIndex !== index);
	};

	let exercises: { name: string; value: string }[] = [
		{
			name: '',
			value: ''
		}
	];
</script>

{#each exercises as exercise, index}
	<div class="flex flex-row justify-between py-1">
		<div class="flex w-3/4 flex-col sm:flex-row sm:space-x-6">
			<AppInput
				label="Nom de l'aliment"
				id="input-exercise-type-{index}"
				bind:selected={exercise.value}
				defaultSelected={exercise.value}
				placeholder=""
				divClass="w-full"
			/>
			<AppInput label="Poids (g)" />
			<AppInput label="Quantité" />
		</div>
		<Button class="mb-0 mt-auto h-fit" color="alternative" on:click={() => removeExercise(index)}
			>Retirer</Button
		>
	</div>
{/each}
<Button on:click={addExercise}>+ Ajouter un aliment</Button>
