<script lang="ts">
	import { Toggle } from 'flowbite-svelte';
	import AppInput from '../base/AppInput.svelte';
	import AppSelect from '../base/AppSelect.svelte';
	import { ExerciceColumnTypes, type ExerciseColumn } from '../../../types';

	const columnTypes = [
		{ name: 'Distance', value: ExerciceColumnTypes.Distance },
		{ name: 'Vitesse (km/h)', value: ExerciceColumnTypes.Speed },
		{ name: 'Temps (s)', value: ExerciceColumnTypes.Time },
		{ name: 'Poids (kg)', value: ExerciceColumnTypes.Weight }
	];

	let columns: ExerciseColumn[] = [
		{
			name: 'Temps de repos',
			type: columnTypes[0]
		}
	];
</script>

{#each columns as column, index}
	<div class="flex flex-row justify-between">
		<div class="flex w-2/3 flex-col sm:flex-row sm:space-x-3">
			<AppInput
				label="Nom de la colonne"
				id="input-column-name-{index}"
				bind:value={column.name}
				divClass="w-full"
			/>
			<AppSelect
				label="Type de données"
				id="input-column-type-{index}"
				type="select"
				items={columnTypes}
				value={column.type}
				defaultSelected={column.type}
				placeholder=""
				divClass="w-full"
			/>
		</div>
		<Toggle class="cursor-pointer" />
	</div>
{/each}
