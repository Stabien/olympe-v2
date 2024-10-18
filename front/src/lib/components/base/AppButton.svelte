<script lang="ts">
	import { Button } from 'flowbite-svelte'
</script>

<Button {...$$restProps} class="duration-200 {$$restProps.class}" on:click>
	<slot />
</Button>
