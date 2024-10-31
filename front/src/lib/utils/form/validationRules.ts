export const isMinLength = (length: number) => (value: string) => {
  return value.length >= length
}

export const mustNotBeEmpty = (message?: string) => {
  return {
    rule: isMinLength(1),
    message: message ?? 'Ce champ est obligatoire'
  }
}