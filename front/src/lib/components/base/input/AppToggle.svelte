<script lang="ts">
	import { Toggle } from 'flowbite-svelte'

	export let checked: boolean
</script>

<Toggle {...$$restProps} class="{$$restProps.class} cursor-pointer" bind:checked>
	<slot />
</Toggle>
