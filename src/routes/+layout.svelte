<script>
	import '../style.css';
	import { theme } from '../store/theme';
	import Header from '../Components/Header.svelte';

	if ($theme === null) {
		const prefersDark =
			window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
		theme.set(prefersDark ? 'dark' : 'light');
	}
</script>

<div class="background-svg"></div>
<main>
	<Header />
	<slot />
</main>

<style>
	main {
		position: relative;
		width: min(90%, 600px);
		margin: 0 auto;
		border-radius: 10px;
		padding: 1rem;
		background-color: var(--bg-clr);
		color: var(--primary-clr);
		box-shadow: 2px 5px 20px hsl(0 0% 20% / 0.3);
		font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode',
			Geneva, Verdana, sans-serif;
	}
</style>
