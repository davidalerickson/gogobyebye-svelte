<script>
	import AboutUs from '$lib/banner/AboutUs.svelte';
	import TravelQuotes from '$lib/banner/TravelQuotes.svelte';
</script>

<div class="sidebar">
	<AboutUs />
	<TravelQuotes />
	<ul>
		<li>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quasi, cupiditate.</li>
		<li>Molestiae facilis corrupti aliquam ab a, dignissimos nesciunt illo reiciendis.</li>
		<li>Quaerat veritatis assumenda qui sint quasi voluptate repellat, numquam recusandae.</li>
		<li>Ex, pariatur velit eos necessitatibus voluptatibus dolor expedita voluptates vero.</li>
	</ul>
</div>

<style lang="scss">
	.sidebar li {
		list-style: square;
	}
</style>
