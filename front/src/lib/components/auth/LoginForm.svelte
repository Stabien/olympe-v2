<script lang="ts">
	import AppInput from '../base/AppInput.svelte'
	import AppButton from '../base/AppButton.svelte'
	import { RocketSolid } from 'flowbite-svelte-icons'
	import { mustNotBeEmpty } from '$lib/utils/form/validationRules'
	import AppForm from '../base/AppForm.svelte'
	import { login } from '$lib/stores/user/userActions'

	let loginForm = {
		email: '',
		password: ''
	}

	let isLoading = false

	const onSubmit = async () => {
		isLoading = true

		try {
			await login(loginForm)
		} finally {
			isLoading = false
		}
	}
</script>

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
			bind:value={loginForm.email}
			validators={[mustNotBeEmpty()]}
		/>
		<AppInput
			type="password"
			label="Mot de passe"
			id="password"
			placeholder="Mot de passe"
			bind:value={loginForm.password}
			validators={[mustNotBeEmpty()]}
		/>
	</div>
	<AppButton class="mt-8 w-full py-3.5" type="submit" {isLoading}>Se connecter</AppButton>
	<a href="/auth/register" class="mx-auto mt-4 block w-fit text-sm font-medium text-primary-500"
		>Inscrivez-vous dès maintenant !</a
	>
</AppForm>
