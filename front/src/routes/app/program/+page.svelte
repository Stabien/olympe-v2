<script lang="ts">
	import AppInput from '$lib/components/base/AppInput.svelte';
	import SessionBuilderForm from '$lib/components/session/SessionBuilderForm.svelte';
	import { Button, Modal } from 'flowbite-svelte';
	import { defaultProgram } from '../../../fixtures';
	import SessionCard from '$lib/components/session/SessionCard.svelte';
	import AppButton from '$lib/components/base/AppButton.svelte';

	let isModalOpened = false;
	let sessionName = 'Nom de la séance';

	const resetSessionName = () => {
		sessionName = 'Nom de la séance';
	};

	const toggleModal = (isOpened: boolean) => (isModalOpened = isOpened);
	const openModal = () => toggleModal(true);

	const onCloseModal = () => {
		toggleModal(false);
		resetSessionName();
	};
</script>

<header class="pb-5">
	<AppButton class="ml-auto mr-0 block" on:click={openModal}>Ajouter une séance</AppButton>
</header>

<main class="flex flex-row gap-3">
	{#each defaultProgram as defaultSession}
		<SessionCard session={defaultSession} />
	{/each}
</main>

<Modal bind:open={isModalOpened} outsideclose on:close={onCloseModal}>
	<header slot="header" class="w-3/4">
		<AppInput
			bind:value={sessionName}
			class="rounded-none border-none bg-white p-0 text-lg font-bold text-black focus:ring-0"
		/>
	</header>
	<SessionBuilderForm />
	<footer slot="footer" class="ml-auto mr-0 space-x-2">
		<AppButton>Enregistrer</AppButton>
		<AppButton color="alternative" on:click={onCloseModal}>Fermer</AppButton>
	</footer>
</Modal>
