<script>
	import ContentLayout from '$lib/UI/ContentLayout.svelte';
	import Sidebar from '$lib/UI/Sidebar.svelte';
</script>

<ContentLayout>
	<div class="main-content">
		<h1>Main Content</h1>
		<p>
			Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam dolore rerum aperiam
			architecto expedita necessitatibus eveniet earum consequatur porro velit corporis tenetur
			sequi, quibusdam officiis nesciunt? Iusto quam amet molestiae.
		</p>
		<p>
			Accusamus exercitationem perferendis beatae saepe nihil dolores iste ea temporibus adipisci
			asperiores? Officiis facilis, cupiditate, itaque numquam sapiente animi labore id, at ex
			doloremque placeat. Iusto enim itaque eaque facere!
		</p>
		<p>
			Quidem magnam debitis numquam error, eius atque labore consequatur repellendus eos quibusdam
			obcaecati, tempora id provident officiis distinctio? Numquam culpa dolorum rerum totam ab
			impedit quas nisi amet sed illo!
		</p>
		<p>
			Distinctio, debitis nisi, quibusdam exercitationem illum a dolores porro vitae vel odit,
			doloribus dolore vero? Quo ex nesciunt aliquid rem culpa saepe necessitatibus. Nostrum
			consequatur, velit ipsum itaque beatae amet.
		</p>
		<p>
			Aspernatur perferendis, necessitatibus maiores animi debitis numquam, molestiae dolorum et
			facilis earum ad esse delectus repellendus eligendi cupiditate qui eveniet mollitia vel
			incidunt. Mollitia ex, ullam quod quae optio eveniet.
		</p>
		<p>
			Temporibus, iure saepe quasi natus tempore, autem, exercitationem eaque perspiciatis beatae
			nostrum in alias vitae doloribus accusamus molestias nulla! Aspernatur enim nisi at nemo
			voluptate veniam, sunt asperiores labore animi.
		</p>
		<p>
			Dolores cumque error doloribus quo totam sunt, nihil, ea impedit culpa fuga non nisi rem et
			quaerat ratione neque aperiam? Vel placeat ad natus molestias voluptates molestiae unde
			repellendus iusto?
		</p>
		<p>
			Nisi distinctio, corrupti quas maxime totam consectetur unde. Non in quos facere explicabo
			minus commodi nobis, quidem nihil fugit, sint neque, itaque eveniet consequuntur. Nisi animi
			corrupti sapiente perferendis nemo.
		</p>
	</div>
	<div slot="sidebar">
		<Sidebar />
	</div>
</ContentLayout>

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
