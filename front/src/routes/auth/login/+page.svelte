<script lang="ts">
	import { goto } from '$app/navigation'
	import LoginForm from '$lib/components/auth/LoginForm.svelte'
	import { isLoggedIn } from '$lib/stores/userStore'
	import { onMount } from 'svelte'

	const onSuccess = () => goto('/app/dashboard')

	onMount(() => {
		if (isLoggedIn()) {
			goto('/app/dashboard')
		}
	})
</script>

<main class="flex h-screen w-full bg-slate-100">
	<LoginForm {onSuccess} />
</main>
