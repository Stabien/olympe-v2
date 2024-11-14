import { writable } from 'svelte/store'
import { v4 as uuidv4 } from 'uuid'

export interface ToastData {
	id: string
	type: ToastType
	message: string
}

export enum ToastType {
	SUCCESS = 'green',
	ERROR = 'red',
	WARNING = 'yellow',
	INFO = 'blue'
}

export const showToast = (message: string, type: ToastType) => {
	const newToast = { id: uuidv4(), type, message }

	toastStore.update((toasts) => [...toasts, newToast])
	setTimeout(() => dismissToast(newToast.id), 3000)
}

export const dismissToast = (id: string) => {
	toastStore.update((toasts) => toasts.filter((toast) => toast.id !== id))
}

export const toastStore = writable<ToastData[]>([])
