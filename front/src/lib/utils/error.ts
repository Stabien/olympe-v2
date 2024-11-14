export const defaultErrorMessage = 'Une erreur est survenue'

export const httpErrorMessages: Record<string, Record<number, string>> = {
	login: {
		404: 'Email ou mot de passe incorrect'
	}
}

export const getHttpErrorMessage = (scope: string, statusCode: number) => {
	return httpErrorMessages[scope][statusCode] ?? defaultErrorMessage
}
