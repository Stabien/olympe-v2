<script lang="ts">
	import { computeMealCalories } from '$lib/operations/meal';
	import { defaultMeal } from '../../../fixtures';
	import type { Meal } from '../../../types';
	import AppCard from '../base/AppCard.svelte';

	export let meal: Meal = defaultMeal;

	const mealCalories = computeMealCalories(meal);
</script>

<AppCard>
	<header class="mb-2 flex flex-row justify-between">
		<h2 class="text-md font-bold">{meal.name}</h2>
		<span>{mealCalories} kc</span>
	</header>
	<main>
		<ul>
			{#each meal.foodstuff as foodstuff}
				<li>{foodstuff.detail.name}</li>
			{/each}
		</ul>
	</main>
</AppCard>
