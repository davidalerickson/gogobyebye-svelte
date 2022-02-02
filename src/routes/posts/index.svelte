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
	import { scale } from 'svelte/transition';
	import ContentLayout from '$lib/UI/ContentLayout.svelte';
	import Sidebar from '$lib/UI/Sidebar.svelte';
	import PostList from '$lib/PostList.svelte';
	export let posts;
	console.log(posts);
</script>

<h2 class="posts-title">All Posts</h2>
<ContentLayout>
	<div>
		<PostList />
	</div>
	<div slot="sidebar">
		<Sidebar />
	</div>
</ContentLayout>
