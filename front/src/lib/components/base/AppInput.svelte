<script lang="ts">
	import { Input, Label } from 'flowbite-svelte';

	export let label: string = '';
	export let id: string = '';
	export let value: string = '';
	export let divClass: string = '';
	export let labelClass: string = '';
	export let inputClass: string = '';
</script>

<div class="flex flex-col {divClass}">
	<Label class={labelClass} for={id}>{label}</Label>
	<Input class={inputClass} {id} bind:value {...$$restProps} />
</div>
