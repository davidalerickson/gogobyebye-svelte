<script>
	import { onMount } from 'svelte';

	let LottiePlayer;

	onMount(async () => {
		const module = await import('@lottiefiles/svelte-lottie-player');
		LottiePlayer = module.LottiePlayer;
	});

	let controlsLayout = [
		'previousFrame',
		'playpause',
		'stop',
		'nextFrame',
		'progress',
		'frame',
		'loop',
		'spacer',
		'background',
		'snapshot',
		'zoom',
		'info'
	];
</script>

<div class="lottie-image">
	{#if LottiePlayer}
		<LottiePlayer
			src="/lottie/justTopLogoAnim.json"
			autoplay={true}
			loop={true}
			controls={false}
			renderer="svg"
			background="transparent"
			height="20%"
			width="60%"
			{controlsLayout}
		/>
	{/if}
</div>

<style>
	.lottie-image {
		width: 55%;
		margin: 0 auto;
	}
</style>
