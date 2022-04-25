<script>
	import { theme } from '../store/theme';
	import Post from '$lib/Post.svelte';
	import APISection from './_API.svelte';
	import { onMount } from 'svelte';
	/** @type {string}*/
	let postLink = 'https://t.me/computly/159';
	/** @type {string}*/
	let postColor = '#2f81f6';
	/** @type {string}*/
	let postColorDark = '#89baff';
	/** @type {boolean}*/
	let darkThemeCheckbox = false;

	if ($theme === null) {
		const prefersDark =
			window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
		theme.set(prefersDark ? 'dark' : 'light');
	}

	const switchTheme = () => {
		theme.set(darkThemeCheckbox ? 'dark' : 'light');
		darkThemeCheckbox
			? document.body.classList.add('dark')
			: document.body.classList.remove('dark');
	};
	onMount(() => {
		darkThemeCheckbox = $theme === 'dark';
		switchTheme();
	});
</script>

<svelte:head>
	<title>Sveltegram</title>
</svelte:head>
<div class="background-svg" />

<main>
	<header>
		<h1>Sveltegram</h1>
		<em>Reactive Telegram widgets built with svelte</em>
	</header>
	<h1>Installation</h1>
	<pre class="language-bash"><code class="token builtin class-name">npm</code><code
			class="token function"> install </code><code class="token">sveltegram</code></pre>
	<h1>Components</h1>
	<h2>Telegram post</h2>
	<div class="snippet">
		<h3>Code</h3>
		<pre class="language-js"><code class="token tag">&lt;script&gt;</code><br /><code
				class="token keyword keyword">import</code
			> <code class="token function">&lbrace; Post &rbrace;</code> <code class="token keyword"
				>from</code
			> <code class="token string">'sveltegram';</code>
<code class="token tag">&lt;/script&gt;</code>
<!-- I love pain -->
<code class="token tag">&lt;Post</code> <code class="token attr-name">link=</code><code
				class="token string">"{postLink}"</code
			><code class="token attr-name">{$theme === 'dark' ? ' darkMode=' : ''}</code><code
				class="token builtin">{$theme === 'dark' ? '{true}' : ''}</code
			> <code class="token attr-name">color=</code><code class="token string">"{postColor}"</code
			> <code class="token attr-name">colorDark=</code><code class="token string"
				>"{postColorDark}"</code
			> <code class="token tag">/&gt;</code></pre>
	</div>
	<h3>Demo</h3>
	<div class="controls">
		<label for="post-link">Link</label>
		<input type="text" id="post-link" bind:value={postLink} />
		<label for="post-dark-switch"> Dark mode </label>
		<input
			type="checkbox"
			id="post-dark-switch"
			bind:checked={darkThemeCheckbox}
			on:change={switchTheme}
		/>
		<label for="post-color"> Accent color </label>
		<input type="color" id="post-color" bind:value={postColor} title={postColor} />
		<label for="post-color2"> Accent color (Dark mode) </label>
		<input type="color" id="post-color2" bind:value={postColorDark} title={postColorDark} />
	</div>

	<div class="widget">
		<Post
			link={postLink}
			darkMode={$theme === 'dark'}
			color={postColor}
			colorDark={postColorDark}
		/>
	</div>
	<APISection />
	<h2>Telegram Comments</h2>
	<h3>Coming soon ...</h3>
</main>

<style>
	:global(*) {
		transition: all 200ms ease-in-out;
	}
	:global(body) {
		--svg-bg-grd-clr: #cccccc;
		--bg-clr: hsla(0, 0%, 100%, 0.8);
		--primary-clr: hsl(0, 0%, 10%);

		--tbl-head-bg-clr: hsla(0, 0%, 100%, 0.2);
		--tbl-odd-bg-clr: hsl(150 70% 80% / 0.1);
		--tbl-even-bg-clr: hsl(40 100% 80% / 0.1);
		--tbl-row-hov-clr: hsl(100 100% 80% / 0.5);
		--prop-clr: hsl(210 100% 30%);
		--desc-clr: hsl(0 0% 30%);
	}
	:global(body.dark) {
		--svg-bg-grd-clr: #333333;
		--bg-clr: hsla(0, 0%, 0%, 0.8);
		--primary-clr: hsl(0, 0%, 90%);

		--tbl-head-bg-clr: hsl(0 100% 0% / 0.2);
		--tbl-odd-bg-clr: hsl(150 70% 20% / 0.1);
		--tbl-even-bg-clr: hsl(40 100% 20% / 0.1);
		--tbl-row-hov-clr: hsl(100 100% 20% / 0.5);
		--prop-clr: hsl(210 100% 70%);
		--desc-clr: hsl(0 0% 70%);
	}
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
	.background-svg {
		position: fixed;
		top: 0;
		left: 0;
		width: 100vw;
		height: 100vh;
		z-index: -1;
		background-image: radial-gradient(
				circle at 16% 83%,
				rgba(148, 148, 148, 0.06) 0%,
				rgba(148, 148, 148, 0.06) 50%,
				rgba(63, 63, 63, 0.06) 50%,
				rgba(63, 63, 63, 0.06) 100%
			),
			radial-gradient(
				circle at 68% 87%,
				rgba(66, 66, 66, 0.06) 0%,
				rgba(66, 66, 66, 0.06) 50%,
				rgba(105, 105, 105, 0.06) 50%,
				rgba(105, 105, 105, 0.06) 100%
			),
			radial-gradient(
				circle at 38% 50%,
				rgba(123, 123, 123, 0.06) 0%,
				rgba(123, 123, 123, 0.06) 50%,
				rgba(172, 172, 172, 0.06) 50%,
				rgba(172, 172, 172, 0.06) 100%
			),
			linear-gradient(90deg, var(--svg-bg-grd-clr), var(--svg-bg-grd-clr));
	}
	:is(h1, h2, h3) {
		font-family: Lato, sans-serif;
	}
	header {
		text-align: center;
		margin-bottom: 2rem;
	}
	header h1 {
		background: linear-gradient(90deg, hsl(0, 100%, 50%), hsl(200, 100%, 40%));
		color: transparent;
		background-clip: text;
		-webkit-background-clip: text;
		font-family: Paytone One, sans-serif;
		font-size: 10vmin;
	}
	header :is(h1, p) {
		margin: 0;
	}
	.controls {
		display: grid;
		grid-template-columns: repeat(2, 1fr);
		place-content: center;
		place-items: start;
		align-items: center;
		gap: 2ch;
		margin-bottom: 1rem;
	}
	.controls input[type='text'] {
		padding: 0.5em 1em;
		border-radius: 5px;
		border: none;
		outline: none;
	}
	.controls input[type='checkbox'] {
		width: 1.5rem;
		height: 1.5rem;
	}
	.controls input[type='color'] {
		width: 2rem;
		height: 2rem;
		border: none;
		outline: none;
	}

	pre {
		border-radius: 10px;
		line-height: 1.5;
		font-size: 1em;
	}

	.widget {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		gap: 1rem;
		margin-bottom: 1rem;
	}
</style>
