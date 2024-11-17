import { type UserStore } from '$lib/types/user'
import { get, writable } from 'svelte/store'

export const userStore = writable<UserStore>({
	user: null,
	token: null
})

export const updateUserStore = (userData: Partial<UserStore>) => {
	userStore.update((user) => ({ ...user, ...userData }))
}

export const isLoggedIn = () => {
	const { token } = get(userStore)

	return Boolean(token)
}
