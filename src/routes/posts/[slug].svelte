<script context="module">
	export async function load({ url, params }) {
		try {
			console.log(params);
			const PostFile = await import(`../../posts/${params.slug}/index.md`);
			return {
				//data passed into svelte component
				props: {
					PostFile: PostFile.default
				}
			};
		} catch (error) {
			return {
				status: 303,
				redirect: '/posts'
			};
		}
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
