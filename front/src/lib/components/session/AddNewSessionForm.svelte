<script lang="ts">
	import AppSelect from '../base/AppSelect.svelte'
	import { defaultProgram, exerciseColumns } from '../../../fixtures'
	import AppInput from '../base/AppInput.svelte'
	import { Textarea } from 'flowbite-svelte'

	const options = defaultProgram.map((session) => ({
		name: session.name,
		value: session.name
	}))

	let selected = options[0].value
</script>

<div class="flex flex-col justify-between py-1">
	<div class="flex w-full flex-col sm:flex-row sm:space-x-6">
		<AppSelect
			label="Type de séance"
			type="select"
			items={options}
			bind:selected
			defaultSelected={options[0].value}
			placeholder=""
			divClass="w-full"
		/>
	</div>
	<div class="mt-4 flex flex-col">
		{#each defaultProgram[0].exercises as exercise}
			<h2 class="text-sm font-bold text-black">{exercise}</h2>
			<div class="mb-3 flex flex-row justify-between gap-4">
				{#each exerciseColumns as exerciseColumn}
					<AppInput label={exerciseColumn} labelClass="font-normal" />
				{/each}
			</div>
		{/each}
	</div>
	<div>
		<label class="text-sm text-black" for="comments">Commentaires</label>
		<Textarea id="comments" class="resize-none"></Textarea>
	</div>
</div>
