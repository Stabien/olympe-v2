<script lang="ts">
	import { Card } from 'flowbite-svelte';
</script>

<Card class="app-shadow" {...$$restProps}>
	<slot />
</Card>
