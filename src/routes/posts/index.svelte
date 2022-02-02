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

<style lang="scss">
	article {
		display: grid;
		grid-template-columns: 30rem 1fr;
		column-gap: 1.5rem;
		margin-bottom: 1rem;
	}
	.posts-title {
		font-weight: 700;
		text-transform: uppercase;
		color: rgb(225, 45, 57);
		font-size: 1.25rem;
		margin-top: 1.25rem;
		margin-bottom: 1.25rem;
		width: 95%;
		margin-left: auto;
	}
	.post-image {
		width: 100%;
	}
	img {
		margin-bottom: 1rem;
		border-radius: var(--radius);
		width: 100%;
	}
	.category {
		display: inline-block;
		margin-bottom: 1rem;
		background: var(--clr-grey-10);
		padding: 0.25rem 0.5rem;
		text-transform: uppercase;
		font-weight: 700;
		border-radius: var(--radius);
		letter-spacing: var(--spacing);
		color: var(--clr-grey-5);
	}
	h3 {
		font-weight: 400;
		margin-bottom: 1rem;
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
	.underline {
		width: 5rem;
		height: 1px;
		background: var(--clr-grey-9);
		/* margin: 0 auto; */
		margin-bottom: 1rem;
	}
	.link {
		text-transform: uppercase;
		letter-spacing: var(--spacing);
		font-weight: 700;
		color: var(--clr-primary-5);
		padding-bottom: 0.1rem;
		display: flex;
		align-items: center;
		svg {
			margin-left: 0.25rem;
			font-size: 1.2rem;
		}
	}
	.link:hover {
		border-color: var(--clr-primary-8);
		color: var(--clr-primary-8);
	}
	footer {
		margin-top: 2rem;
		padding-top: 1rem;
		padding-bottom: 1rem;
		border-top: 1px solid var(--clr-grey-9);
		border-bottom: 1px solid var(--clr-grey-9);
		display: flex;
		align-items: center;
		justify-content: space-between;
		color: var(--clr-grey-5);

		& .date {
			display: flex;
			align-items: center;
			& .icon {
				color: var(--clr-primary-5);
				margin-right: 0.5rem;
			}
		}
	}
</style>
