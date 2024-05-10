import type { Meal } from "../types"

export const defaultSession = {
  name: 'Séance Push',
  exercises: [ 
    'Développé couché',
    'Traction',
    'Squat'
  ]
}

export const defaultSession2 = {
  name: 'Séance Pull',
  exercises: [ 
    'Développé couché',
    'Traction',
    'Squat'
  ]
}

export const defaultSession3 = {
  name: 'Séance Legs',
  exercises: [ 
    'Développé couché',
    'Traction',
    'Squat'
  ]
}

export const exerciseColumns = ['Poids', 'Nombre de série', 'Répétitions', 'Temps de repos']
export const exerciseResult = {
  date: '24/04/2024',
  name: 'Développé couché',
  weight: 40,
  sets: 4,
  repetitions: '8-8-8-8',
  restTime: 90,
}

export const defaultFood = {
  name: 'Riz',
  kc: 350,
  kj: 1400,
  proteins: 10,
  carbohydrates: 80,
  sugar: 2,
  lipids: 10,
  saturatedFattyAcids: 5
}

export const defaultFoodWithQuantity = {
  food: defaultFood,
  weight: 100,
  quantity: 2,
}

export const defaultMeal: Meal = {
  name: 'Dîner',
  food: [
    defaultFoodWithQuantity,
    defaultFoodWithQuantity,
    defaultFoodWithQuantity
  ]
}

export const defaultProgram = [
  defaultSession,
  defaultSession2,
  defaultSession3,
]