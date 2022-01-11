/** @type {import('@sveltejs/kit').Config} */
import svelstPreprocess from 'svelte-preprocess';
const config = {
	kit: {
		// hydrate the <div id="svelte"> element in src/app.html
		target: '#svelte'
	},
	preprocess: svelstPreprocess()
};

export default config;
