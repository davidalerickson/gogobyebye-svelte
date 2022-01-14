<script context="module">
	export async function load({ params }) {
		console.log(params);
		const post = {
			title: 'This is the title',
			date: new Date(),
			content: 'This is my first post'
		};
		// const PostFile = await import(`../../posts/${params.slug}.md`);
		const PostFile = await import(`../../posts/${params.slug}/.md`);
		return {
			props: {
				post,
				title: PostFile.metadata.title,
				wholepost: PostFile.default
			}
		};
	}
	import Hello from '../../posts/post001.md';
</script>

<script>
	export let post;
	export let title;
	export let wholepost;
</script>

<h1>I have hit a slug route</h1>

<p>{post.date}</p>
<p>{post.title}</p>
<p>{post.content}</p>

<h1>I have hit a slug route</h1>

<Hello />

<h1>This is a title gotten from markdown frontmatter {title}</h1>

<h1>This is the whole post</h1>
{wholepost}
