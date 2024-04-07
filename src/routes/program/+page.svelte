<script lang="ts">
	import ExerciseBuilder from '$lib/components/forms/ExerciseBuilder.svelte';
	import { Button, Modal } from 'flowbite-svelte';

	let isModalOpened = false;

	const openModal = () => (isModalOpened = true);
	const closeModal = () => (isModalOpened = false);
</script>

<header class="pb-5">
	<Button class="ml-auto mr-0 block" on:click={openModal}>Ajouter un exercice</Button>
</header>

<Modal
	title="Création d'un exercice"
	bind:open={isModalOpened}
	autoclose
	outsideclose
	on:blur={closeModal}
>
	<ExerciseBuilder />
	<footer slot="footer" class="ml-auto mr-0 space-x-2">
		<Button>Enregistrer</Button>
		<Button color="alternative">Fermer</Button>
	</footer>
</Modal>
