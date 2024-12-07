import { browser } from '$app/environment'

export const getToken = () => {
	if (browser) {
		return localStorage.getItem('token')
	}

	return null
}

export const storeToken = (token: string) => {
	if (browser) {
		localStorage.setItem('token', token)
	}
}

export const removeToken = () => {
	if (browser) {
		localStorage.removeItem('token')
	}
}
