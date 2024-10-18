<script lan="ts">
	import AppInput from '../base/AppInput.svelte'
	import AppButton from '../base/AppButton.svelte'
	import { RocketSolid } from 'flowbite-svelte-icons'
</script>

<main class="flex h-screen w-full bg-slate-100 px-2">
	<form class="shadow-xxl m-auto w-[28rem] rounded-md bg-white p-8 shadow-lg">
		<div class="mx-auto flex w-fit items-center space-x-1 text-xl font-medium text-primary-500">
			<RocketSolid slot="icon" class="size-12" />
			<h1>OLYMPE</h1>
		</div>
		<div class="mt-6 space-y-4">
			<div class="flex space-x-4">
				<AppInput label="Nom" id="lastname" placeholder="Nom" inputClass="p-3" />
				<AppInput label="Prénom" id="firstname" placeholder="Prénom" inputClass="p-3" />
			</div>
			<AppInput label="Email" id="email" placeholder="Email" inputClass="p-3" />
			<AppInput
				type="password"
				label="Mot de passe"
				id="password"
				placeholder="Mot de passe"
				inputClass="p-3"
			/>
			<AppInput
				type="password"
				label="Confirmation de mot de passe"
				id="confirmPassword"
				placeholder="Mot de passe"
				inputClass="p-3"
			/>
		</div>
		<AppButton class="mt-8 w-full py-3.5">S'inscrire</AppButton>
		<a href="/auth/login" class="mx-auto mt-4 block w-fit text-sm font-medium text-primary-500"
			>Se connecter
		</a>
	</form>
</main>
