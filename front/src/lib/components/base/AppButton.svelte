<script lang="ts">
	import { Button, Spinner } from 'flowbite-svelte'

	export let isLoading: boolean = false
</script>

<Button
	{...$$restProps}
	class="h-12 duration-200 {$$restProps.class} ring-0 focus-within:ring-0"
	on:click
>
	{#if isLoading}
		<Spinner size={6} color="white" />
	{:else}
		<slot />
	{/if}
</Button>
