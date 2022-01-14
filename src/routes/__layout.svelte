<script>
	import '../styles/global.css';
	import Header from '$lib/UI/Header.svelte';
	import Footer from '$lib/UI/Footer.svelte';
</script>

<header>
	<Header />
</header>

<slot />
<Footer />
