<script>
	import '../style.css';
	import '../prism.css';
	import { theme } from '../store/theme';
	import Header from '../Components/Header.svelte';
	/**
	 * @typedef {Object} Props
	 * @property {import('svelte').Snippet} [children]
	 */

	/** @type {Props} */
	let { children } = $props();

	if ($theme === null) {
		const prefersDark =
			window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
		theme.set(prefersDark ? 'dark' : 'light');
	}
</script>

<div class="background-svg"></div>
<main>
	<Header />
	{@render children?.()}
</main>

<style>
	main {
		position: relative;
		max-width: 70vmax;
		margin: 0 auto;
		border-radius: 10px;
		padding: 1rem;
		background-color: var(--bg-clr);
		color: var(--primary-clr);
		box-shadow: 2px 5px 20px hsl(0 0% 20% / 0.3);
	}
</style>
