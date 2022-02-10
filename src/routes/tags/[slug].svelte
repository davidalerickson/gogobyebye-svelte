<script context="module">
	export async function load({ url, params }) {
		return {
			props: {
				tag: params.slug
			}
		};
	}
</script>

<script>
	import { scale } from 'svelte/transition';
	import ContentLayout from '$lib/UI/ContentLayout.svelte';
	import Sidebar from '$lib/UI/Sidebar.svelte';
	import PostList from '$lib/PostList.svelte';
	export let tag;
</script>

<h2 class="posts-title">{tag}</h2>
<ContentLayout>
	<div in:scale>
		<PostList {tag} />
	</div>
	<div slot="sidebar">
		<Sidebar />
	</div>
</ContentLayout>
