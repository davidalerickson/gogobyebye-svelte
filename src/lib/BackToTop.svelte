<script>
	import { scale, fade } from 'svelte/transition';
	let y;
</script>

<svelte:window bind:scrollY={y} />

<button on:click={() => (y = 0)} class:button-visible={y > 30} class:button-invisible={y <= 30}>
	<svg class="MuiSvgIcon-root" focusable="false" viewBox="0 0 24 24" aria-hidden="true"
		><path d="M7.41 15.41L12 10.83l4.59 4.58L18 14l-6-6-6 6z" /></svg
	>
</button>

<style>
	button {
		right: 24px;
		bottom: 24px;
		z-index: 1500;
		position: fixed;
		color: #fff;
		background-color: #f50057;
		width: 40px;
		height: 40px;
		border: none;
		border-radius: 50%;
		box-shadow: 0px 0px 5px #000;
		display: none;
		transition: all 0.3s ease-in-out;
	}
	button:hover {
		background-color: #990036;
	}
	.button-visible {
		display: block;
		animation: append-animate 0.3s ease-in-out;
	}
	.button-invisible {
		/* display: block; */
		animation: append-animate 0.5s ease-in-out reverse;
	}
	svg {
		fill: currentColor;
		width: 1em;
		height: 1em;
		display: inline-block;
		font-size: 1.5rem;
		transition: fill 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
		flex-shrink: 0;
	}
	@keyframes append-animate {
		from {
			transform: scale(0);
			opacity: 0;
		}
		to {
			transform: scale(1);
			opacity: 1;
		}
	}
</style>
