import { mdsvex } from 'mdsvex';
import mdsvexConfig from './mdsvex.config.js';
/** @type {import('@sveltejs/kit').Config} */
import svelstPreprocess from 'svelte-preprocess';
const config = {
	extensions: ['.svelte', ...mdsvexConfig.extensions],

	kit: {
		// hydrate the <div id="svelte"> element in src/app.html
		target: '#svelte'
	},

	preprocess: [svelstPreprocess(), mdsvex(mdsvexConfig)]
};

export default config;
