<script>
	export let images = [];
	let imageList = [];
	let myTag;
	import { onMount } from 'svelte';
	onMount(async () => {
		const AllImagesObject = import.meta.globEager(`/static/slider-images/**/*.jpg`);
		const AllImages = Object.keys(AllImagesObject);
		console.log(AllImages);
		let truncatedImages = AllImages.map((image) => image.replace('/static', ''));
		images = [...truncatedImages];
		console.log(images);
		myTag.style.backgroundImage = `url(/slider-images/indigoroof.jpg)`;
	});
</script>

<div class="imageContainer" bind:this={myTag} />

<style>
	.imageContainer {
		width: 100%;
		height: 300px;
		background-image: url('{images[0]}');
		background-size: cover;
		background-position: center;
		background-repeat: no-repeat;
	}
</style>
