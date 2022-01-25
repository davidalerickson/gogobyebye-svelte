<script context="module">
	export async function load({ url, params }) {
		try {
			console.log(params);
			const PostFile = await import(`../../posts/${params.slug}.md`);
			return {
				//data passed into svelte component
				props: {
					PostFile: PostFile.default,
					postMeta: PostFile.metadata,
					slug: params.slug
				}
			};
		} catch (error) {
			return {
				error: 'Post not found',
				status: 400
			};
		}
	}
</script>

<script>
	import { scale } from 'svelte/transition';
	import ContentLayout from '$lib/UI/ContentLayout.svelte';
	import Sidebar from '$lib/UI/Sidebar.svelte';
	import Cover from '$lib/Cover.svelte';
	export let PostFile;
	export let postMeta;
	export let slug;
	console.log(PostFile);
</script>

<ContentLayout>
	<div in:scale>
		<Cover backgroundImgUrl="/postimages/{slug}/cover.jpg" />
		<h2>
			{postMeta.title}
		</h2>
		<PostFile />
	</div>
	<div slot="sidebar">
		<Sidebar />
	</div>
</ContentLayout>
