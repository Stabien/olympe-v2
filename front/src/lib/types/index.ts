export interface Route {
  label: string
  path: string
  icon: object
}

export interface SelectOption {
  value: string
  name: string
}

export interface ExerciseColumn {
  name: string
  type: ExerciceColumnTypes | ''
}

export interface Session {
  name: string
  exercises: string[]
}

export interface SessionResult {
  date: string
  exercices: ExerciceResult[]
  comments: string
}

export interface ExerciceResult {
  name: string
  weight: number
  restTime: number
  sets: number
  repetitions: string
}

export enum ExerciceColumnTypes {
  Hours = 'HOURS',
  Kg = 'KG',
  Km = 'KM',
  KmPerHour = 'KMPERHOUR',
  Minutes = 'MINUTES',
  MinutePerKm = 'MINUTEPERKM',
  Number = 'NUMBER',
  Secondes = 'SECONDES',
  List = 'LIST'
}

export interface Foodstuff {
  name: string,
  kc: number,
  kj: number,
  lipids: number,
  saturatedFattyAcids: number,
  carbohydrates: number,
  sugar: number,
  proteins: number
}

export interface FoodstuffWithQuantity {
  detail: Foodstuff,
  weight: number,
  quantity: number
}

export interface Meal {
  name: string
  foodstuff: FoodstuffWithQuantity[]
}

export * from './auth'