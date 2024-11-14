export default {
	get: async (uri: string): Promise<Response> => {
		return await fetch(`${import.meta.env.VITE_API_URL}${uri}`)
	},

	post: async (
		uri: string,
		body: Record<string, any>,
		headers?: HeadersInit
	): Promise<Response> => {
		const fetchOptions = {
			method: 'POST',
			body: JSON.stringify(body),
			headers
		}

		return await fetch(`${import.meta.env.VITE_API_URL}${uri}`, fetchOptions)
	},

	patch: async (uri: string, body: Record<string, any>): Promise<Response> => {
		const fetchOptions = {
			method: 'PATCH',
			body: JSON.stringify(body)
		}

		return await fetch(`${import.meta.env.VITE_API_URL}${uri}`, fetchOptions)
	},

	delete: async (uri: string): Promise<Response> => {
		const fetchOptions = {
			method: 'DELETE'
		}

		return await fetch(`${import.meta.env.VITE_API_URL}${uri}`, fetchOptions)
	}
}
