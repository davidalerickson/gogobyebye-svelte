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
