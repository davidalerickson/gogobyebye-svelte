<div class="content-grid">
	<div class="main-content">
		<slot />
	</div>
	<div class="sidebar-content">
		<slot name="sidebar" />
	</div>
</div>

<style lang="scss">
	.content-grid {
		display: grid;
		grid-template-columns: 1fr;
		column-gap: 2rem;
		width: 80%;
		margin: 0 auto;
		@media (min-width: 768px) {
			grid-template-columns: 3fr 1fr;
		}
	}
	.sidebar-content li {
		list-style: square;
	}
</style>
