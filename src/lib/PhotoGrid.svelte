<script>
	export let slug;
	export let images = [];
	let imageList = [];
	import { onMount } from 'svelte';
	onMount(async () => {
		const AllImagesObject = import.meta.globEager('/static/postimages/**/*.jpg');
		const AllImages = Object.keys(AllImagesObject);
		console.log(AllImages);
		let filteredImages = AllImages.filter((image) => image.includes(slug));
		//remove static folder from path
		let truncatedImages = filteredImages.map((image) => image.replace('/static', ''));
		images = [...truncatedImages];
		console.log(images);
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
		border-radius: 3px;
	}
</style>
