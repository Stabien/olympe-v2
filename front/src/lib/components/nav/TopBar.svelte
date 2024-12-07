<script>
	import { Navbar as NavbarFlowbite, NavBrand, NavLi, NavUl } from 'flowbite-svelte'
</script>

<NavbarFlowbite class="relative shadow-md sm:px-11 [&>div]:mx-0 [&>div]:max-w-full">
	<NavBrand>
		<img src="../../../src/lib/assets/images/logo.svg" class="me-3 h-6 sm:h-9" alt="logo" />
		<span class="self-center whitespace-nowrap text-xl font-semibold dark:text-white">Olympe</span>
	</NavBrand>
	<NavUl class="flex-end flex">
		<NavLi href="/">Home</NavLi>
		<NavLi href="/about">About</NavLi>
		<NavLi href="/docs/components/navbar">Navbar</NavLi>
		<NavLi href="/pricing">Pricing</NavLi>
		<NavLi href="/contact">Contact</NavLi>
	</NavUl>
</NavbarFlowbite>
