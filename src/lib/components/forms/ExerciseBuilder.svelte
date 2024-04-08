<script lang="ts">
	import { Button } from 'flowbite-svelte';
	import AppInput from '../base/AppInput.svelte';
	import AppSelect from '../base/AppSelect.svelte';
	import { ExerciceColumnTypes, type ExerciseColumn } from '../../../types';

	const columnTypes = [
		{ name: 'Heures', value: ExerciceColumnTypes.Hours },
		{ name: 'Kg', value: ExerciceColumnTypes.Kg },
		{ name: 'Km', value: ExerciceColumnTypes.Km },
		{ name: 'Km/h', value: ExerciceColumnTypes.KmPerHour },
		{ name: 'Minutes', value: ExerciceColumnTypes.Minutes },
		{ name: 'Minutes/km', value: ExerciceColumnTypes.MinutePerKm },
		{ name: 'Nombre simple', value: ExerciceColumnTypes.Number },
		{ name: 'Secondes', value: ExerciceColumnTypes.Secondes }
	];

  const addColumn = () => {
    const newColumn: ExerciseColumn = {
      name: 'Nouvelle colonne',
      type: '',
    }

    columns = [...columns, newColumn]
  }

  const removeColumn = (columnIndex: number) => {
    columns = columns.filter((column, index) => columnIndex !== index)
  }

	let columns: ExerciseColumn[] = [
		{
			name: 'Poids',
			type: ExerciceColumnTypes.Kg
		},
		{
			name: 'Temps de repos',
			type: ExerciceColumnTypes.Minutes
		},
		{
			name: 'Durée',
			type: ExerciceColumnTypes.Hours
		}
	];
</script>

{#each columns as column, index}
	<div class="flex flex-row justify-between py-1">
		<div class="flex w-3/4 flex-col sm:flex-row sm:space-x-6">
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
				bind:selected={column.type}
				defaultSelected={column.type}
				placeholder=""
				divClass="w-full"
			/>
		</div>
		<Button class="mb-0 mt-auto h-fit" color="alternative" on:click={() => removeColumn(index)}>Retirer</Button>
	</div>
{/each}
<Button on:click={addColumn}>+ Ajouter une colonne</Button>
