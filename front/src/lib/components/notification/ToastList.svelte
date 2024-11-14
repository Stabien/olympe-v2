<script lang="ts">
	import { dismissToast, toastStore } from '$lib/stores/toastStore'
	import { flip } from 'svelte/animate'
	import AppToast from '../base/AppToast.svelte'
	import { fly } from 'svelte/transition'
</script>

<div class="fixed bottom-0 right-0 flex flex-col justify-end space-y-2 overflow-hidden p-8">
	{#each $toastStore as toast (toast.id)}
		<div
			animate:flip={{ duration: 200 }}
			in:fly={{ duration: 200, x: 200 }}
			out:fly={{ duration: 200, x: 200 }}
			class="relative"
		>
			<AppToast type={toast.type} on:close={() => dismissToast(toast.id)}>
				{toast.message}
			</AppToast>
		</div>
	{/each}
</div>
