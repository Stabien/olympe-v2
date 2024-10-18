import type { Meal } from "../types";

export const computeMealCalories = (meal: Meal) => (
  meal.foodstuff.reduce((acc, foodstuff) => foodstuff.detail.kc + acc, 0)
)