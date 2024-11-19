import type { LoginPayload, RegisterPayload } from '$lib/types'
import api from './apiService'

export const loginService = async (loginPayload: LoginPayload) => {
	return await api.post('/auth/login', loginPayload, {
		'Content-Type': 'application/json'
	})
}

export const registerService = async (registerPayload: RegisterPayload) => {
	return await api.post('/auth/register', registerPayload, {
		'Content-Type': 'application/json'
	})
}
