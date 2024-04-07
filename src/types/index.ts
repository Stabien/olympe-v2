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
  type: {
    name: string
    value: ExerciceColumnTypes
  }
}

export enum ExerciceColumnTypes {
  Weight = 'WEIGHT',
  Time = 'TIME',
  Speed = 'SPEED',
  Distance = 'DISTANCE'
}

export enum UnitOfMeasurement {
  Kg = 'KG',
  Min = 'MIN',
  Sec = 'SEC',
  Mile = 'MILE',
  Km = 'KM',
  Pound = 'POUND'
}