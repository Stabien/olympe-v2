<script lang="ts">
	import AppInput from '../base/AppInput.svelte'
	import AppButton from '../base/AppButton.svelte'
	import { RocketSolid } from 'flowbite-svelte-icons'
	import { mustNotBeEmpty } from '$lib/utils/form/validationRules'
	import AppForm from '../base/AppForm.svelte'
	import { login } from '$lib/services/auth'
	import { userStore } from '$lib/stores/userStore'
	import { goto } from '$app/navigation'

	const validators = [mustNotBeEmpty()]

	let loginPayload = {
		email: '',
		password: ''
	}

	const onLoginSuccess = (token: string) => {
		userStore.set({ ...$userStore, token })
		goto('/app/dashboard')
	}

	const onLoginFailure = () => {

	}

	const onSubmit = async () => {
		try {
			const response = await login(loginPayload)
			const token = await response.json()

			if (response.status !== 200) {
				onLoginFailure()
			} else {
				onLoginSuccess(token)
			}
		} catch (e) {
			console.log(e)
			throw new Error('error')
		}
	}
</script>

<main class="flex h-screen w-full bg-slate-100 px-2">
	<AppForm class="shadow-xxl m-auto w-[28rem] rounded-md bg-white p-8 shadow-lg" {onSubmit}>
		<div class="mx-auto flex w-fit items-center space-x-1 text-xl font-medium text-primary-500">
			<RocketSolid slot="icon" class="size-12" />
			<h1>OLYMPE</h1>
		</div>
		<div class="mt-6 space-y-4">
			<AppInput
				label="Email"
				id="email"
				placeholder="Email"
				inputClass="p-3"
				bind:value={loginPayload.email}
				{validators}
			/>
			<AppInput
				type="password"
				label="Mot de passe"
				id="password"
				placeholder="Mot de passe"
				inputClass="p-3"
				bind:value={loginPayload.password}
				{validators}
			/>
		</div>
		<AppButton class="mt-8 w-full py-3.5" type="submit">Se connecter</AppButton>
		<a
			href="/auth/registration"
			class="mx-auto mt-4 block w-fit text-sm font-medium text-primary-500"
			>Inscrivez-vous dès maintenant !</a
		>
	</AppForm>
</main>
