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