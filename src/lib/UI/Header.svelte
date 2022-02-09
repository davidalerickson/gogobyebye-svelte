<script>
	let animationHeight;
	let y; //scroll position
	import Hero from '$lib/Hero.svelte';
	import Navbar from '$lib/Navbar.svelte';
</script>

<svelte:window bind:scrollY={y} />

<div class:heroWrapperHidden={y > 200} bind:clientHeight={animationHeight}>
	>
	<Hero />
</div>
<div class="navbar-base" class:navbarWrapper={y >= animationHeight}>
	<Navbar />
</div>

<style>
	.heroWrapper {
		height: 100%;
		width: 100%;
	}
	.heroWrapperHidden {
		/* animation: hero-animate-down cubic-bezier(1, 0, 0, 1) 2s forwards; */
		background-color: white;
	}
	.navbar-base {
		width: 100%;
		z-index: 10000;
		background-color: white;
	}
	.navbarWrapper {
		position: fixed;
		top: 0;
		width: 100%;
	}

	@keyframes hero-animate-down {
		from {
			/* transform: scale(1); */

			opacity: 0;
		}
		to {
			/* transform: scale(0); */

			opacity: 1;
		}
	}
</style>
