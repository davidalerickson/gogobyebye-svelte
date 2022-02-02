<script>
	import { scale } from 'svelte/transition';
	// import Slider from '$lib/slider.svelte';
	import ContentLayout from '$lib/UI/ContentLayout.svelte';
	import Sidebar from '$lib/UI/Sidebar.svelte';
	import PostList from '$lib/PostList.svelte';
</script>

<!-- <div in:scale>
	<Slider />
</div> -->

<div class="imageContainer" />
<h2 class="posts-title">Latest Posts</h2>
<ContentLayout>
	<div class="main-content">
		<PostList numPosts="3" />
	</div>
	<div slot="sidebar">
		<Sidebar />
	</div>
</ContentLayout>

<style>
	.imageContainer {
		width: 100%;
		height: 500px;
		background-image: url(/slider-images/indigoroof.jpg);
		background-size: cover;
		background-position: center;
		background-repeat: no-repeat;
	}
</style>
