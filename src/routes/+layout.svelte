<script>
	import '@fontsource-variable/schibsted-grotesk';
	import '@fontsource-variable/jetbrains-mono';
	import '@twinkleplop/theme-ayu';
	import '../style.css';
	import { page } from '$app/state';
	import Sidebar from '../Components/docs/Sidebar.svelte';

	/**
	 * @typedef {Object} Props
	 * @property {import('svelte').Snippet} [children]
	 */

	/** @type {Props} */
	let { children } = $props();

	let canonical = $derived(`${page.url.origin}${page.url.pathname}`);
</script>

<svelte:head>
	<link rel="canonical" href={canonical} />
	<meta property="og:url" content={canonical} />
	<script
		defer
		src="https://um.a3k.me/script.js"
		data-website-id="707e54e3-6b8b-4c45-b63f-8dbc36299822"
	></script>
</svelte:head>

<a class="skip-link" href="#main">Skip to content</a>

<div class="app-shell">
	<Sidebar />
	<main id="main" class="app-main" tabindex="-1">
		{@render children?.()}
	</main>
</div>
