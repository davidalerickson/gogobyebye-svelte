<script>
	import Title from '$lib/banner/Title.svelte';
	import quotes from './quotes';

	const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
	console.log(randomQuote.author);
</script>

<Title title="Travel Quotes" />
<article class="travel-quotes">
	<figure class="quote">
		<blockquote class="quote__text">
			{randomQuote.quote}
		</blockquote>
		<figcaption class="quote__author-box">
			<p class="quote__author-name">- {randomQuote.author}</p>
		</figcaption>
	</figure>
</article>

<style>
	.quote {
		position: relative;
		background: #fff;
		padding: 1rem;
		margin-top: 3rem;
		border-radius: 0.5rem;
	}

	.quote {
		margin-bottom: 1rem;
		z-index: 10;
		position: relative;
		/* //to allow z-index to work */
		font-style: italic;
	}

	.quote__author-name {
		font-size: 1.1rem;
		font-weight: 600;
		text-transform: uppercase;
	}

	.quote__author-box {
		text-align: right;
	}

	.quote__author-date {
		font-size: 0.9rem;
	}

	.quote::before {
		content: '\201C';
		/* //In Gatsby need to escape backslash, in Svelte */
		position: absolute;
		top: -1.2rem;
		left: -0.3rem;
		font-size: 10rem;
		line-height: 1;
		font-family: sans-serif;
		color: var(--clr-yellowish);
		z-index: -1;
	}

	/* &__text{
      margin-bottom: 1rem;
      z-index: 10;
      position: relative; //to allow z-index to work
      font-style: italic;
    }

    &__author-name{
      font-size: 1.1.rem;
      font-weight: 600;
      text-transform: uppercase;

    }

    &__author-box{
      text-align: right;

    }

    &__author-date{
      font-size: .9rem;
    }

    &::before {
        content: "\\201C"; //Need to escape the backslash to get this to work
        position: absolute;
        top: -1.2rem;
        left: -.3rem;
        font-size: 10rem;
        line-height: 1;
        font-family: sans-serif;
        color: var(--clr-yellowish);
        z-index: 1;

    } */
</style>
