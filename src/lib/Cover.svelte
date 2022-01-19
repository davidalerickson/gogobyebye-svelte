<script>
	import { onMount } from 'svelte';
	export let backgroundImgUrl;
	let myTag;

	onMount(() => {
		console.log(myTag);
		myTag.style.backgroundImage = `url(${backgroundImgUrl})`;
	});
</script>

<div class="banner-image" bind:this={myTag}>Imaage Div</div>

<style>
	.banner-image {
		height: 300px;
		margin: 1rem 0;
		background-size: cover;
	}
</style>
