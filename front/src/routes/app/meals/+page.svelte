<script lang="ts">
	import AppInput from '$lib/components/base/AppInput.svelte';
	import { Button, Modal } from 'flowbite-svelte';
	import MealBuilderForm from '$lib/components/meal/MealBuilderForm.svelte';
	import MealCard from '$lib/components/meal/MealCard.svelte';
	import AppButton from '$lib/components/base/AppButton.svelte';

	let isModalOpened = false;
	let mealName = 'Nom du repas';

	const resetMealName = () => {
		mealName = 'Nom du repas';
	};

	const toggleModal = (isOpened: boolean) => (isModalOpened = isOpened);
	const openModal = () => toggleModal(true);

	const onCloseModal = () => {
		toggleModal(false);
		resetMealName();
	};
</script>

<header class="pb-5">
	<AppButton class="ml-auto mr-0 block" on:click={openModal}>Ajouter un repas</AppButton>
</header>

<main class="flex flex-row gap-3">
	<MealCard />
</main>

<Modal bind:open={isModalOpened} outsideclose on:close={onCloseModal}>
	<header slot="header" class="w-3/4">
		<AppInput
			bind:value={mealName}
			class="rounded-none border-none bg-white p-0 text-lg font-bold text-black focus:ring-0"
		/>
	</header>
	<MealBuilderForm />
	<footer slot="footer" class="ml-auto mr-0 space-x-2">
		<AppButton>Enregistrer</AppButton>
		<AppButton color="alternative" on:click={onCloseModal}>Fermer</AppButton>
	</footer>
</Modal>
