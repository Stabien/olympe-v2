<script lang="ts">
	import type { Session } from '../../types'
	import AppCard from '../base/AppCard.svelte'

	export let session: Session
</script>

<AppCard>
	<header class="mb-2">
		<h2 class="text-md font-bold">{session.name}</h2>
	</header>
	<main>
		<ul>
			{#each session.exercises as exercise}
				<li>{exercise}</li>
			{/each}
		</ul>
	</main>
</AppCard>
