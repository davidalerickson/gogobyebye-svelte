<script>
	import SocialLinks from '../UI/constants/SocialLinks.svelte';
	import Title from './Title.svelte';
</script>

<div class="wrapper">
	<Title title="About Us" />{' '}
	<img src="/banner-about-dc.jpg" class="img" alt="David and Carmela About" />
	<p>
		We are David and Carmela, an American-Brazilian couple who has chosen to live our lives as
		citizens of the world.
	</p>
	<SocialLinks scale="1.5" />
</div>

<style>
	.wrapper {
		text-align: center;
	}
	p {
		color: var(--clr-grey-5);
		margin: 0;
	}
	.img {
		width: 10%;
		height: 10%;

		border-radius: 50%;
	}
	@media (min-width: 1200px) {
		.img {
			width: 35%;
			height: 35%;
		}
	}
</style>
