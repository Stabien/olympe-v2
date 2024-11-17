export const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export const isMinLength = (length: number) => (value: string) => {
	return value.length >= length
}

export const isEmail = () => (value: string) => {
	return emailRegex.test(value)
}

export const isEqual = (refValue: string) => (value: string) => {
	return value === refValue
}

export const mustNotBeEmpty = (message?: string) => {
	return {
		rule: isMinLength(1),
		message: message ?? 'Ce champ est obligatoire'
	}
}

export const mustBeEmail = (message?: string) => {
	return {
		rule: isEmail(),
		message: message ?? 'Veuillez saisir une adresse email'
	}
}

export const mustEqual = (value: string, message?: string) => {
	return {
		rule: isEqual(value),
		message: message ?? "Les deux champs n'ont pas la même valeur"
	}
}
