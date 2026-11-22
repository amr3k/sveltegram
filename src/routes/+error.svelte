<script>
	import { page } from '$app/state';

	let heading = $derived(page.status === 404 ? 'Page not found' : 'Something went wrong');
	let message = $derived(page.error?.message ?? 'The page could not be loaded.');
</script>

<svelte:head>
	<title>{heading} | Sveltegram</title>
	<meta name="robots" content="noindex" />
</svelte:head>

<article class="page">
	<header class="page-head">
		<h1>{heading}</h1>
		<p class="lede">{message}</p>
	</header>

	<p><a href="/">Go to the installation guide</a></p>
</article>
