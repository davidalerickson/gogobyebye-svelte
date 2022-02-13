<script>
	import { goto } from '$app/navigation';
	export let numPosts;
	export let tag;
	let posts = [];
	import { onMount } from 'svelte';
	onMount(async () => {
		const postsGlob = import.meta.globEager('../posts/*.md');
		const postList = Object.values(postsGlob);
		posts = postList.map((post) => {
			return post.metadata;
		});
		if (numPosts) {
			posts = posts.slice(0, numPosts);
		}
		if (tag) {
			posts = posts.filter((post) => {
				const tagsLowerCase = post.tags.map((tag) => {
					return tag.toLowerCase();
				});
				console.log(tag);
				console.log(tagsLowerCase);
				return tagsLowerCase.includes(tag.toLowerCase());
			});
		}

		//sort posts descending by date
		posts.sort((a, b) => {
			return new Date(b.date) - new Date(a.date);
		});
	});

	function goToTag(tag) {
		goto(`/tags/${tag}`);
		document.location.reload();
	}
</script>

<div>
	<h1>Posts</h1>
	{#each posts as post}
		<article>
			<div class="post-image">
				<figure>
					<img src={`/postimages/${post.slug}/cover.jpg`} alt={post.title} />
				</figure>
			</div>
			<div class="content">
				<div class="category-wrapper">
					<apan class="category">{post.category}</apan>
				</div>
				<h3>
					<a sveltekit:prefetch href="/posts/{post.slug}">{post.title}</a>
				</h3>
				<div class="underline" />
				{#if post.tags}
					<span>Tags: </span>
					{#each post.tags as tag}
						<!-- <button on:click={() => goToTag(tag.toLowerCase())} class="tag">
							{tag}
						</button> -->
						<a sveltekit:prefetch href="/tags/{tag.toLowerCase()}">
							<span class="tag">
								{tag}
							</span>
						</a>
					{/each}
				{/if}
				<p>{`${post.excerpt.slice(0, 120)}...`}</p>
				<a class="link" sveltekit:prefetch href="/posts/{post.slug}"
					>Continue Reading <svg
						stroke="currentColor"
						fill="currentColor"
						stroke-width="0"
						viewBox="0 0 512 512"
						height="1em"
						width="1em"
						xmlns="http://www.w3.org/2000/svg"
						><path
							d="M284.9 412.6l138.1-134c6-5.8 9-13.7 9-22.4v-.4c0-8.7-3-16.6-9-22.4l-138.1-134c-12-12.5-31.3-12.5-43.2 0-11.9 12.5-11.9 32.7 0 45.2l83 79.4h-214c-17 0-30.7 14.3-30.7 32 0 18 13.7 32 30.6 32h214l-83 79.4c-11.9 12.5-11.9 32.7 0 45.2 12 12.5 31.3 12.5 43.3 0z"
						/></svg
					>
				</a>
				<footer>
					<span class="date"
						><svg
							stroke="currentColor"
							fill="currentColor"
							stroke-width="0"
							viewBox="0 0 512 512"
							class="icon"
							height="1em"
							width="1em"
							xmlns="http://www.w3.org/2000/svg"
							><path
								d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm0 448c-110.5 0-200-89.5-200-200S145.5 56 256 56s200 89.5 200 200-89.5 200-200 200zm61.8-104.4l-84.9-61.7c-3.1-2.3-4.9-5.9-4.9-9.7V116c0-6.6 5.4-12 12-12h32c6.6 0 12 5.4 12 12v141.7l66.8 48.6c5.4 3.9 6.5 11.4 2.6 16.8L334.6 349c-3.9 5.3-11.4 6.5-16.8 2.6z"
							/></svg
						>{new Date(post.date).toLocaleDateString('en-US', {
							weekday: 'long',
							year: 'numeric',
							month: 'long',
							day: 'numeric'
						})}</span
					>
				</footer>
			</div>
		</article>
	{/each}
</div>

<style lang="scss">
	article {
		display: grid;
		grid-template-columns: 1fr;
		column-gap: 1.5rem;
		margin-bottom: 1rem;
	}
	@media (min-width: 960px) {
		article {
			grid-template-columns: 30rem 1fr;
		}
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
		margin: 0 0.25rem 0.25rem;
		background: var(--clr-primary-5);
		padding: 0.2rem 0.4rem;
		text-transform: uppercase;
		font-size: 0.5rem;
		font-weight: 700;
		border-radius: var(--radius);
		letter-spacing: var(--spacing);
		color: var(--clr-white);
		cursor: pointer;
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
