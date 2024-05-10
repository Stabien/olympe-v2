<script lang="ts">
	import { defaultMeal } from '../../../fixtures';
	import type { Meal } from '../../../types';
	import AppCard from '../base/AppCard.svelte';

	export let meal: Meal = defaultMeal;

	const mealKc = meal.food.reduce((acc, food) => food.food.kc + acc, 0);
</script>

<AppCard>
	<header class="mb-2 flex flex-row justify-between">
		<h2 class="text-md font-bold">{meal.name}</h2>
		<span>{mealKc} kc</span>
	</header>
	<main>
		<ul>
			{#each meal.food as food}
				<li>{food.food.name}</li>
			{/each}
		</ul>
	</main>
</AppCard>
