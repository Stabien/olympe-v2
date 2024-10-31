import type { Writable } from "svelte/store"

export interface FieldValidator {
  rule: (value: string) => boolean
  message: string
}

export interface FieldValidationState {
  isValid: boolean
  canDisplayError: boolean
}

export type ValidationStore = Writable<Record<string, FieldValidationState>>

export interface FormValidationContext {
  validationStore: ValidationStore
}
