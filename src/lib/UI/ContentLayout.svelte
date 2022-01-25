<div class="content-grid">
	<div class="main-content">
		<slot />
	</div>
	<div class="sidebar-content">
		<slot name="sidebar" />
	</div>
</div>

<style lang="scss">
	.main-content {
		padding: 0 2rem;
	}
	.content-grid {
		display: grid;
		grid-template-columns: 1fr;
		column-gap: 2rem;
		width: 95%;
		margin: 0 auto;
		@media (min-width: 1200px) {
			grid-template-columns: 3fr 1fr;
		}
	}
</style>
