<script context="module">
	export function load({ error, status }) {
		return {
			props: {
				error,
				status
			}
		};
	}
</script>

<script>
	export let status;
	export let error;
</script>

<h1>{status}</h1>
<h1>{error.message}</h1>
<p>Somthing happened on the way to the Forum</p>
