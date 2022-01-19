<script context="module">
	export async function load() {
		const posts = import.meta.globEager('../../posts/**/*.md');
		const postList = Object.values(posts);
		const postMeta = postList.map((post) => {
			return post.metadata;
		});

		return {
			props: {
				posts: postMeta
			}
		};
	}
</script>

<script>
	import ContentLayout from '$lib/UI/ContentLayout.svelte';
	import Sidebar from '$lib/UI/Sidebar.svelte';
	export let posts;
	console.log(posts);
</script>

<ContentLayout>
	<div>
		<h1>Posts Page</h1>

		{#each posts as post}
			<article>
				<div class="post-image">
					<figure>
						<img src={`/postimages/${post.slug}/cover.jpg`} alt={post.title} />
					</figure>
				</div>
				<div class="content">
					{#if post.tags}
						<span>Tags: </span>
						{#each post.tags as tag}
							<span class="tag">
								{tag}
							</span>
						{/each}
					{/if}
					<p>
						<a sveltekit:prefetch href="/posts/{post.slug}">{post.title}</a>
					</p>
				</div>
			</article>
		{/each}

		<p>
			Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias unde voluptatibus maiores
			accusamus rerum, mollitia, harum, fuga aliquam distinctio minima totam obcaecati earum rem.
			Delectus nesciunt animi reprehenderit doloremque quasi.
		</p>
	</div>
	<div slot="sidebar">
		<Sidebar />
	</div>
</ContentLayout>

<style>
	article {
		display: grid;
		grid-template-columns: 22rem 1fr;
		column-gap: 1.5rem;
		margin-bottom: 1rem;
	}
	img {
		margin-bottom: 1rem;
		border-radius: var(--radius);
		width: 22rem;
	}
	.tag {
		display: inline-block;
		margin: 0 0.25rem 1rem;
		background: var(--clr-primary-5);
		padding: 0.2rem 0.4rem;
		text-transform: uppercase;
		font-size: 0.5rem;
		font-weight: 700;
		border-radius: var(--radius);
		letter-spacing: var(--spacing);
		color: var(--clr-white);
	}
</style>
