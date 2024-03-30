<script lang="ts">
	import { BottomNav, BottomNavItem, ImagePlaceholder, Skeleton } from 'flowbite-svelte';
	import {
		HomeSolid,
		WalletSolid,
		AdjustmentsVerticalOutline,
		UserCircleSolid
	} from 'flowbite-svelte-icons';
</script>

<BottomNav position="absolute" classInner="grid-cols-4">
	<BottomNavItem btnName="Home">
		<HomeSolid
			class="mb-1 h-5 w-5 text-gray-500 group-hover:text-primary-600 dark:text-gray-400 dark:group-hover:text-primary-500"
		/>
	</BottomNavItem>
	<BottomNavItem btnName="Wallet">
		<WalletSolid
			class="mb-1 h-5 w-5 text-gray-500 group-hover:text-primary-600 dark:text-gray-400 dark:group-hover:text-primary-500"
		/>
	</BottomNavItem>
	<BottomNavItem btnName="Settings">
		<AdjustmentsVerticalOutline
			class="mb-1 h-5 w-5 text-gray-500 group-hover:text-primary-600 dark:text-gray-400 dark:group-hover:text-primary-500"
		/>
	</BottomNavItem>
	<BottomNavItem btnName="Profile">
		<UserCircleSolid
			class="mb-1 h-5 w-5 text-gray-500 group-hover:text-primary-600 dark:text-gray-400 dark:group-hover:text-primary-500"
		/>
	</BottomNavItem>
</BottomNav>
