<script lang="ts">
	import Table from '$lib/components/table/Table.svelte';
	import { Button } from 'flowbite-svelte';
</script>

<header class="pb-5">
	<Button class="ml-auto mr-0 block">Ajouter un exercice</Button>
</header>

<main class="mx-auto mt-6 w-4/5">
	<Table></Table>
</main>
