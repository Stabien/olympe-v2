<script lang="ts">
	import { goto } from '$app/navigation'
	import { onAuthentication } from '$lib/stores/user/userActions'
	import { onDestroy, onMount } from 'svelte'

	let unsubscribe: () => void

	const handleAuthentication = () => goto('/app/dashboard')

	onMount(() => {
		unsubscribe = onAuthentication(handleAuthentication)
	})

	onDestroy(() => {
		unsubscribe()
	})
</script>

<main class="flex h-screen w-full bg-slate-100">
	<slot />
</main>
