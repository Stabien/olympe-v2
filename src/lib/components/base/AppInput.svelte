<script lang="ts">
	import { Input, Label } from 'flowbite-svelte';

	export let label: string = '';
	export let id: string = '';
	export let value: string = '';
	export let divClass: string = '';
</script>

<div class="flex flex-col {divClass}">
	<Label for={id}>{label}</Label>
	<Input {id} bind:value {...$$restProps} />
</div>
