<script>
	import { theme } from '$lib/Website/theme';
	import Background from '$lib/Website/Background.svelte';
	import TelegramPost from '$lib/Post.svelte';
	import { browser } from '$app/env';
	/** @type {string}*/
	let accentColor = '#2f81f6';
	/** @type {string}*/
	let accentColorInDarkMode = '#89baff';

	/** @type {boolean}*/
	let darkThemeCheckbox = $theme === 'dark';

	$: {
		if (browser) {
			theme.set(darkThemeCheckbox ? 'dark' : 'light');
			darkThemeCheckbox
				? document.body.classList.add('dark')
				: document.body.classList.remove('dark');
		}
	}
	if ($theme === null) {
		const browserDarkMode =
			window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
		theme.set(browserDarkMode ? 'dark' : 'light');
	}
</script>

<svelte:head>
	<link rel="preconnect" href="https://fonts.googleapis.com" />
	<link rel="preconnect" href="https://fonts.gstatic.com" />
	<link href="https://fonts.googleapis.com/css2?family=Lato&display=swap" rel="stylesheet" />
</svelte:head>

<Background --bg-color={$theme === 'dark' ? '#333333' : '#cccccc'} />
<main>
	<header>
		<a href="/"> <h1>Sveltegram</h1></a>
		<p>Reactive Telegram widgets built with svelte</p>
	</header>
	<div class="controls">
		<label for="dark-switch">
			Dark mode?
			<input type="checkbox" id="dark-switch" bind:checked={darkThemeCheckbox} />
		</label>
		<label for="color">
			Accent color
			<input type="color" id="color" bind:value={accentColor} />
		</label>
		<label for="color2">
			Accent color (Dark mode)
			<input type="color" id="color2" bind:value={accentColorInDarkMode} />
		</label>
	</div>

	<div class="widget">
		<TelegramPost
			postLink="https://t.me/computly/188"
			darkMode={$theme === 'dark'}
			{accentColor}
			{accentColorInDarkMode}
		/>
	</div>
</main>

<style>
	main {
		width: max(90%, 600px);
		margin: 0 auto;
		border-radius: 10px;
		padding: 1rem;
		background-color: hsla(0, 0%, 100%, 0.8);
		--primary-color: hsl(0, 0%, 10%);
		--accent-color: #416d72;
		color: var(--primary-color);
		font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode',
			Geneva, Verdana, sans-serif;
	}
	:global(body.dark) main {
		background-color: hsla(0, 0%, 0%, 0.8);
		--primary-color: hsl(0, 0%, 90%);
		--accent-color: #be928d;
	}
	header {
		text-align: center;
		margin-bottom: 2rem;
	}
	header a {
		text-decoration: none;
		color: var(--accent-color);
		font-family: 'Lato', sans-serif;
	}
	header :is(h1, p) {
		margin: 0;
	}
	.controls {
		display: flex;
		justify-content: center;
		align-items: center;
		gap: 2ch;
		margin-bottom: 1rem;
	}

	.widget {
		margin-bottom: 1rem;
	}
</style>
