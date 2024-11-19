import { loginService, registerService } from '$lib/services/authService'
import type { LoginPayload, RegisterPayload } from '$lib/types'
import type { UserStore } from '$lib/types/user'
import { removeToken } from '$lib/utils/browser'
import { defaultErrorMessage, getHttpErrorMessage } from '$lib/utils/error'
import { get } from 'svelte/store'
import { showToast, ToastType } from '../toastStore'
import { userStore } from './userStore'

const onLoginSuccess = async (response: Response) => {
	const { token } = await response.json()

	updateUserStore({ token })
}

const onLoginError = (status: number) => {
	const errorMessage = getHttpErrorMessage('login', status)

	showToast(errorMessage, ToastType.ERROR)
}

export const login = async (loginPayload: LoginPayload) => {
	try {
		const response = await loginService(loginPayload)

		if (response.ok) {
			onLoginSuccess(response)
		} else {
			onLoginError(response.status)
		}
	} catch (e) {
		throw new Error(defaultErrorMessage)
	}
}

const onRegisterSuccess = async (response: Response) => {
	const { token } = await response.json()

	updateUserStore({ token })
}

const onRegisterError = (status: number) => {
	const errorMessage = getHttpErrorMessage('register', status)

	showToast(errorMessage, ToastType.ERROR)
}

export const register = async (registerPayload: RegisterPayload) => {
	try {
		const response = await registerService(registerPayload)

		if (response.ok) {
			onRegisterSuccess(response)
		} else {
			onRegisterError(response.status)
		}
	} catch (e) {
		throw new Error(defaultErrorMessage)
	}
}

export const updateUserStore = (updates: Partial<UserStore>) => {
	userStore.update((userStore) => ({ ...userStore, ...updates }))
}

export const isLoggedIn = () => {
	const { token } = get(userStore)

	return Boolean(token)
}

export const logout = () => {
	userStore.set({ user: null, token: null })
	removeToken()

	showToast('Vous êtes maintenant déconnecté', ToastType.SUCCESS)
}

export const onAuthChanged = (handleAuthChanged: (isAuthenticated: boolean) => void) => {
	return userStore.subscribe((userStore) => {
		handleAuthChanged(Boolean(userStore.token))
	})
}

export const onAuthentication = (handleAuthentication: () => void) => {
	return onAuthChanged((isAuthenticated) => {
		if (isAuthenticated) {
			handleAuthentication()
		}
	})
}

export const onDisconnection = (handleDisconnection: () => void) => {
	return onAuthChanged((isAuthenticated) => {
		if (!isAuthenticated) {
			handleDisconnection()
		}
	})
}
