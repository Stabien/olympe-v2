export const defaultErrorMessage = 'Une erreur est survenue'

export const httpErrorMessages: Record<string, Record<number, string>> = {
	login: {
		404: 'Email ou mot de passe incorrect'
	},
	register: {
		400: 'Cet email est déjà utilisé'
	}
}

export const getHttpErrorMessage = (scope: string, statusCode: number) => {
	return httpErrorMessages[scope][statusCode] ?? defaultErrorMessage
}
