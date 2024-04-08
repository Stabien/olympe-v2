<script lang="ts">
	import AppInput from '$lib/components/base/AppInput.svelte';
	import ExerciseBuilder from '$lib/components/forms/ExerciseBuilder.svelte';
	import Table from '$lib/components/table/Table.svelte';
	import { Button, Modal } from 'flowbite-svelte';

	let isModalOpened = false;
	let exerciceName = "Nom de l'exercice";

	const resetExerciceName = () => {
		exerciceName = "Nom de l'exercice";
	};

	const toggleModal = (isOpened: boolean) => (isModalOpened = isOpened);
	const openModal = () => toggleModal(true);

	const onCloseModal = () => {
		toggleModal(false);
		resetExerciceName();
	};
</script>

<header class="pb-5">
	<Button class="ml-auto mr-0 block" on:click={openModal}>Ajouter un exercice</Button>
</header>

<main>
  <Table />
</main>

<Modal bind:open={isModalOpened} outsideclose on:close={onCloseModal}>
	<header slot="header" class="w-3/4">
		<AppInput
			bind:value={exerciceName}
			class="rounded-none border-none bg-white p-0 text-lg font-bold text-black focus:ring-0"
		/>
	</header>
	<ExerciseBuilder />
	<footer slot="footer" class="ml-auto mr-0 space-x-2">
		<Button>Enregistrer</Button>
		<Button color="alternative" on:click={onCloseModal}>Fermer</Button>
	</footer>
</Modal>
