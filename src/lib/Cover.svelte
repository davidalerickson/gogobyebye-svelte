<script>
	import { onMount } from 'svelte';
	export let backgroundImgUrl;
	let myTag;

	onMount(() => {
		console.log(myTag);
		myTag.style.backgroundImage = `url(${backgroundImgUrl})`;
	});
</script>

<div class="banner-image" bind:this={myTag} />

<style>
	.banner-image {
		height: 400px;
		margin: 1rem 0;
		background-size: cover;
		background-position: center;
		border-radius: 5px;
	}
</style>
