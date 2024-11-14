<script lang="ts">
	import { ToastType } from '$lib/stores/toastStore'
	import { Toast } from 'flowbite-svelte'
	import {
		CheckCircleSolid,
		CloseCircleSolid,
		ExclamationCircleSolid,
		InfoCircleSolid
	} from 'flowbite-svelte-icons'

	export let type: ToastType = ToastType.ERROR

	const iconMap = {
		[ToastType.SUCCESS]: CheckCircleSolid,
		[ToastType.ERROR]: CloseCircleSolid,
		[ToastType.WARNING]: ExclamationCircleSolid,
		[ToastType.INFO]: InfoCircleSolid
	}
</script>

<Toast color={type} on:close>
	<svelte:component this={iconMap[type]} slot="icon" />
	<slot />
</Toast>
