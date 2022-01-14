<script>
	export let src;
	export let title;
</script>

<div class="wrap-the-wrapper">
	<div class="wrapper-video">
		<iframe
			class="video-iframe"
			{src}
			{title}
			allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
			frameBorder="0"
			webkitallowfullscreen="true"
			mozallowfullscreen="true"
			allowFullScreen
		/>
	</div>
</div>

<style>
	.wrapper-video {
		position: relative;
		width: 100%;
		height: 100%;
		overflow: hidden;
	}
	.video-iframe {
		position: relative;
		left: 50%;
		width: 90%;
		height: 500px;
		transform: translateX(-50%);
		position: relative;
		margin-bottom: 2rem;
	}
</style>
