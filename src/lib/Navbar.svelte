<script>
	import SocialLinks from './UI/constants/SocialLinks.svelte';
</script>

<nav class="topnav">
	<!-- left padding div -->
	<div />
	<a class="active" href="/">
		<img src="/icons/newgogobyebyetrans.png" alt="" />
	</a>
	<a href="/posts">Posts</a>
	<a href="#contact">Newsletter</a>
	<div class="social-links">
		<SocialLinks scale="1.5" />
	</div>
	<!-- right padding div -->
	<div />
</nav>

<style>
	img {
		transform: translateY(-10px);
		transition: all 0.3s ease;
	}
	img:hover {
		transform: scale(1.05) translateY(-10px);
	}
	.topnav {
		background-color: white;
		height: 3rem;
		width: 100%;
		display: grid;
		grid-template-columns: 0.5fr 1fr 1fr 1fr 7fr 0.5fr;
		/* background: transparent; */
		border-top: 1px solid var(--clr-grey-8);
		/* border-bottom: 1px solid var(--clr-grey-8); */
		box-shadow: 0px 2px 3px var(--clr-grey-8);
		margin-bottom: 1rem;
		z-index: 10000;
	}

	/* Style the links inside the navigation bar */
	.topnav a {
		color: black;
		justify-self: left;
		padding: 14px 16px;
		text-decoration: none;
		font-size: 17px;
	}

	/* Change the color of links on hover */
	.topnav a:hover {
		/* background-color:  hsl(245,65%,59%); */
		/* color: white; */
		font-weight: bold;
	}

	/* Add a color to the active/current link */
	.topnav a.active {
		/* background-color: hsl(245,65%,59%); */
		color: black;
	}
	.social-links {
		transform: translateY(-0.3rem);
		justify-self: right;
	}
</style>
