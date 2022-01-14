<script context="module">
	export async function load({ url, params }) {
		console.log(params);
		const PostFile = (await import(`../../posts/${params.slug}/index.md`)).default;
		return {
			props: {
				PostFile
			}
		};
	}
</script>

<script>
	import ContentLayout from '$lib/UI/ContentLayout.svelte';
	import Sidebar from '$lib/UI/Sidebar.svelte';
	export let PostFile;
	console.log(PostFile);
</script>

<ContentLayout>
	<PostFile />
	<div slot="sidebar">
		<Sidebar />
	</div>
</ContentLayout>
