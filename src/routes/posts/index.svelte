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
		<ul>
			{#each posts as post}
				<li><a href="/posts/{post.slug}">{post.title}</a></li>
			{/each}
		</ul>
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
