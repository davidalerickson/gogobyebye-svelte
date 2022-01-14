<script>
	import '../styles/global.css';
	import Header from '$lib/UI/Header.svelte';
	import Footer from '$lib/UI/Footer.svelte';
</script>

<header>
	<Header />
</header>
<div class="content-grid">
	<div class="main-content">
		<slot />
	</div>
	<div class="sidebar-content">
		<slot name="sidebar" />
	</div>
</div>

<Footer />

<style lang="scss">
	.mid-div {
		display: grid;
		grid-template-columns: 1fr;
		column-gap: 2rem;
		width: 80%;
		margin: 0 auto;
		@media (min-width: 768px) {
			grid-template-columns: 3fr 1fr;
		}
	}
	.sidebar li {
		list-style: square;
	}
</style>
