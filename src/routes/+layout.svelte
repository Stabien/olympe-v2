<script>
	import Navbar from '$lib/components/Navbar.svelte';
	import '../app.pcss';
</script>

<Navbar />
<slot />

<style lang="css">
	:global(body) {
		font-family: 'Roboto';
		padding: 10px;
	}

	:global(.pac-container) {
		font-family: 'Roboto';
		border-radius: 8px;
		font-size: 16px;
	}

	:global(.pac-item) {
		padding: 8px 10px;
		cursor: pointer;
		font-size: 14px;
	}

	:global(.pac-item-query) {
		font-size: 14px;
	}

	:global(.pac-matched) {
		color: blue;
	}

	:global(.pac-icon) {
		display: none;
	}

	:global(.pac-container.pac-logo::after) {
		display: none;
	}
</style>
