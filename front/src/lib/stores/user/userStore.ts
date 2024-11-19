import { type UserStore } from '$lib/types/user'
import { getToken, removeToken, storeToken } from '$lib/utils/browser'
import { writable } from 'svelte/store'

export const userStore = writable<UserStore>({
	user: null,
	token: getToken()
})

userStore.subscribe((userStore) => {
	if (userStore.token !== getToken()) {
		if (userStore.token) {
			storeToken(userStore.token ?? '')
		} else {
			removeToken()
		}
	}
})
