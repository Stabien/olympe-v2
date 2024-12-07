<script lang="ts">
	import { Card } from 'flowbite-svelte'
</script>

<Card {...$$restProps} class="rounded-md {$$restProps.class}">
	<slot />
</Card>
