<script lang="ts">
	import { goto } from '$app/navigation'
	import RegisterForm from '$lib/components/auth/RegisterForm.svelte'

	const onSuccess = () => goto('/app/dashboard')
</script>

<main class="flex h-screen w-full bg-slate-100">
	<RegisterForm {onSuccess} />
</main>
