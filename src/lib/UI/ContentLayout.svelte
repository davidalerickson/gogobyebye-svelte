<script>
	import BackToTop from '$lib/BackToTop.svelte';
</script>

<div class="content-grid">
	<div class="main-content">
		<slot />
	</div>
	<div class="sidebar-content">
		<slot name="sidebar" />
	</div>
</div>
<BackToTop />

<style lang="scss">
	.main-content {
		padding: 0 2rem;
	}
	.content-grid {
		display: grid;
		grid-template-columns: 1fr;
		column-gap: 2rem;
		width: 85vw;
		max-width: var(--max-width);
		margin: 0px auto 4rem;
		@media (min-width: 992px) {
			width: 92vw;
		}
		@media (min-width: 1200px) {
			grid-template-columns: 3fr 1fr;
		}
	}
</style>
