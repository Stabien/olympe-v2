import type { FieldValidationState, FieldValidator, ValidationStore } from "$lib/types/validator"
import { get } from "svelte/store"

export const updateFieldValidation = (isValid: boolean, canDisplayError: boolean) => {
  return {
    isValid,
    canDisplayError: canDisplayError ? !isValid : false
  }
}

export const computeValidation = (fields: Record<string, FieldValidationState>, fieldId: string, isValid: boolean) => {
  const canDisplayError = fields[fieldId]?.canDisplayError ?? false

  return {
    ...fields,
    [fieldId]: updateFieldValidation(isValid, canDisplayError)
  }
}

export const enableFieldErrors = (fields: Record<string, FieldValidationState>): Record<string, FieldValidationState> => {
  const fieldEntries = Object.entries(fields)
  const updatedFieldValidationState = fieldEntries.map(([fieldId, fieldValidationState]) => [
    fieldId,
    { ...fieldValidationState, canDisplayError: true }
  ])

  return Object.fromEntries(updatedFieldValidationState)
}

export const hasValidationError = (fields: Record<string, FieldValidationState>): boolean => {
  const fieldEntries = Object.entries(fields)

  return fieldEntries.filter(field => !field[1].isValid).length > 0
}

export const updateValidationStore = (
  validationStore: undefined | ValidationStore,
  fieldId: string,
  isValid: boolean,
): void => {
  if (!validationStore) {
    return
  }

  const fields = get(validationStore)
  const updatedValidation = computeValidation(fields, fieldId, isValid)

  validationStore.set(updatedValidation)
}

export const getValidationError = (validators: FieldValidator[], fieldValue: string): string | null => {
  for (const validator of validators) {
    if (!validator.rule(fieldValue)) {
      return validator.message
    }
  }

  return null
}