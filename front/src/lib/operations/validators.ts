import type { FieldValidation } from "$lib/types/validator"

export const minLength = (length: number) => (value: string) => {
  return value.length >= length
}

export const updateFieldValidation = (isValid: boolean, canDisplayError: boolean) => {
  return {
    isValid,
    canDisplayError: canDisplayError ? !isValid : false
  }
}

export const computeFieldValidation = (fields: Record<string, FieldValidation>, fieldId: string, isValid: boolean) => {
  const canDisplayError = fields[fieldId]?.canDisplayError ?? false

  return {
    ...fields,
    [fieldId]: updateFieldValidation(isValid, canDisplayError)
  }
}

export const enableFieldErrors = (fields: Record<string, FieldValidation>) => {
  const fieldEntries = Object.entries(fields)
  const updatedFieldValidation = fieldEntries.map(([fieldId, fieldValidationState]) => [
    fieldId,
    { ...fieldValidationState, canDisplayError: true }
  ])

  return Object.fromEntries(updatedFieldValidation)
}

export const hasValidationError = (fields: Record<string, FieldValidation>) => {
  const fieldEntries = Object.entries(fields)

  return fieldEntries.filter(field => !field[1].isValid).length > 0
}