<script lang="ts">
	import { logout } from '$lib/stores/user/userActions'
	import { onMount } from 'svelte'

	onMount(() => logout())
</script>
