<script>
	export let slug;
	export let images = [];
	let imageList = [];
	import { onMount } from 'svelte';
	onMount(async () => {
		const AllImagesObject = import.meta.globEager(`/static/postimages/**/*.jpg`);
		const AllImages = Object.keys(AllImagesObject);
		let filteredImages = AllImages.filter((image) => image.includes(slug));
		images = [...filteredImages];
	});
</script>

<div class="photogrid">
	{#each images as image}
		<div>
			<img src={image} alt="something" />
		</div>
	{/each}
</div>

<style>
	.photogrid {
		display: grid;
		grid-template-columns: repeat(3, minmax(200px, 1fr));
		grid-gap: 5px;
	}
	img {
		width: 100%;
	}
</style>
