<script lang="ts">
	import AppInput from '../base/AppInput.svelte'
	import AppButton from '../base/AppButton.svelte'
	import { RocketSolid } from 'flowbite-svelte-icons'
	import { mustBeEmail, mustEqual, mustNotBeEmpty } from '$lib/utils/form/validationRules'
	import AppForm from '../base/AppForm.svelte'
	import { register } from '$lib/stores/user/userActions'

	let registerForm = {
		firstname: '',
		lastname: '',
		email: '',
		password: '',
		passwordConfirmation: ''
	}

	let isLoading = false

	const onSubmit = async () => {
		isLoading = true

		try {
			await register(registerForm)
		} finally {
			isLoading = false
		}
	}
</script>

<AppForm {onSubmit} class="shadow-xxl m-auto w-[28rem] rounded-md bg-white p-8 shadow-lg">
	<div class="mx-auto flex w-fit items-center space-x-1 text-xl font-medium text-primary-500">
		<RocketSolid slot="icon" class="size-12" />
		<h1>OLYMPE</h1>
	</div>
	<div class="mt-6 space-y-4">
		<div class="flex space-x-4">
			<AppInput
				label="Nom"
				id="lastname"
				placeholder="Nom"
				validators={[mustNotBeEmpty()]}
				bind:value={registerForm.lastname}
			/>
			<AppInput
				label="Prénom"
				id="firstname"
				placeholder="Prénom"
				validators={[mustNotBeEmpty()]}
				bind:value={registerForm.firstname}
			/>
		</div>
		<AppInput
			label="Email"
			id="email"
			placeholder="Email"
			validators={[mustBeEmail()]}
			bind:value={registerForm.email}
		/>
		<AppInput
			type="password"
			label="Mot de passe"
			id="password"
			placeholder="Mot de passe"
			validators={[mustNotBeEmpty()]}
			bind:value={registerForm.password}
		/>
		<AppInput
			type="password"
			label="Confirmation de mot de passe"
			id="password-confirmation"
			placeholder="Mot de passe"
			validators={[mustNotBeEmpty(), mustEqual(registerForm.password)]}
			bind:value={registerForm.passwordConfirmation}
		/>
	</div>
	<AppButton class="mt-8 w-full py-3.5" type="submit" {isLoading}>S'inscrire</AppButton>
	<a href="/auth/login" class="mx-auto mt-4 block w-fit text-sm font-medium text-primary-500"
		>Se connecter
	</a>
</AppForm>
