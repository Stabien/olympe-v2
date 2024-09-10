<script lang="ts">
	import { Button } from 'flowbite-svelte';
	import AppSelect from '../base/AppSelect.svelte';

	const exerciseList = [
		{ name: 'Développé couché', value: '1' },
		{ name: 'Traction', value: '2' },
		{ name: 'Curl Biceps', value: '3' },
		{ name: 'Triceps à la poulie', value: '4' },
		{ name: 'Squat', value: '5' }
	];

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
		<div class="flex w-2/3 flex-col sm:flex-row sm:space-x-6">
			<AppSelect
				label="Nom de l'exercice"
				id="input-exercise-type-{index}"
				type="select"
				items={exerciseList}
				bind:selected={exercise.value}
				defaultSelected={exercise.value}
				placeholder=""
				divClass="w-full"
			/>
		</div>
		<Button class="mb-0 mt-auto h-fit" color="alternative" on:click={() => removeExercise(index)}
			>Retirer</Button
		>
	</div>
{/each}
<Button on:click={addExercise}>+ Ajouter un exercice</Button>
