<script lang="ts">
	import { Button, Modal } from 'flowbite-svelte';
	import AddNewSessionForm from '$lib/components/session/AddNewSessionForm.svelte';
	import SessionTable from '$lib/components/session/SessionTable.svelte';
	import ExerciseTable from '$lib/components/exercise/ExerciseTable.svelte';

	let isModalOpened = false;
	let exerciceName = 'Nom de la séance';

	const resetExerciseName = () => {
		exerciceName = 'Nom de la séance';
	};

	const toggleModal = (isOpened: boolean) => (isModalOpened = isOpened);
	const openModal = () => toggleModal(true);

	const onCloseModal = () => {
		toggleModal(false);
		resetExerciseName();
	};
</script>

<header class="pb-5">
	<Button class="ml-auto mr-0 block" on:click={openModal}>Ajouter une séance</Button>
</header>

<main class="p-8">
	<section class="flex w-4/5 flex-row gap-12">
		<div class="flex-1">
			<SessionTable />
		</div>
		<div class="flex-1">
			<ExerciseTable />
		</div>
	</section>
</main>

<Modal bind:open={isModalOpened} outsideclose on:close={onCloseModal}>
	<header slot="header" class="w-3/4">
		<h2 class="text-lg font-bold text-black">Ajouter une séance</h2>
	</header>
	<AddNewSessionForm />
	<footer slot="footer" class="ml-auto mr-0 space-x-2">
		<Button>Enregistrer</Button>
		<Button color="alternative" on:click={onCloseModal}>Fermer</Button>
	</footer>
</Modal>
