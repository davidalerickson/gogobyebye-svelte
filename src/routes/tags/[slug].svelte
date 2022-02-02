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
	import Cover from '$lib/Cover.svelte';
	import PostLiist from '$lib/PostList.svelte';
	export let tag;
</script>

<ContentLayout>
	<h2>{tag}</h2>
	<div in:scale>
		<PostLiist {tag} />
	</div>
	<div slot="sidebar">
		<Sidebar />
	</div>
</ContentLayout>
