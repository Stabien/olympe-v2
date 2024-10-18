import type { Writable } from "svelte/store"

export interface InputValidation {
  validator: (value: string) => boolean
  errorMessage: string
}

export interface FieldValidation {
  isValid: boolean
  canDisplayError: boolean
}

export type FieldValidationStore = Writable<Record<string, FieldValidation>>

export interface FormValidation {
  fieldValidationStore: FieldValidationStore
}
