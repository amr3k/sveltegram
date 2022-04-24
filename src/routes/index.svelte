<script>
	import { theme } from '../store/theme';
	// import Post from 'sveltegram';
	import Post from '$lib/Post.svelte';
	import { browser } from '$app/env';
	import { onMount } from 'svelte';
	/** @type {string}*/
	let postColor = '#2f81f6';
	/** @type {string}*/
	let postColorDark = '#89baff';
	/** @type {number}*/
	let postTransitionDuration = 200;
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
				class="token string">"https://t.me/computly/189"</code
			> <code class="token attr-name">{$theme === 'dark' ? 'darkMode=' : ''}</code><code
				class="token builtin">{$theme === 'dark' ? '{true}' : ''}</code
			> <code class="token attr-name">color=</code><code class="token string">"{postColor}"</code
			> <code class="token attr-name">colorDark=</code><code class="token string"
				>"{postColorDark}"</code
			> {postTransitionDuration !== 200
				? `<code class="token attr-name">transitionDuration=</code><code class="token function">${postTransitionDuration}</code>`
				: ''} <code class="token tag">/&gt;</code></pre>
	</div>
	<h3>Demo</h3>
	<div class="controls">
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
		<label for="post-transition"> Transition duration ({postTransitionDuration}ms)</label>
		<input
			type="range"
			min="0"
			max="1000"
			step="100"
			id="post-transition"
			bind:value={postTransitionDuration}
			title={`${postTransitionDuration}ms`}
		/>
	</div>

	<div class="widget">
		<Post
			link="https://t.me/computly/189"
			darkMode={$theme === 'dark'}
			color={postColor}
			colorDark={postColorDark}
			transitionDuration={postTransitionDuration}
		/>
	</div>
	<div class="api">
		<h3>API</h3>
		<div class="head">
			<span>Property</span>
			<span>Type</span>
			<span>Default</span>
		</div>

		<div class="row">
			<span>link <strong>(required)</strong></span>
			<span>string</span>
			<span />
			<span
				><strong>Description: </strong>Telegram post link. You can copy it from telegram context
				menu</span
			>
		</div>
		<div class="row">
			<span>darkMode</span>
			<span>boolean</span>
			<span>false</span>
			<span><strong>Description: </strong>Enable dark mode</span>
		</div>
		<div class="row">
			<span>Color</span>
			<span>string</span>
			<span>#2f81f6</span>
			<span><strong>Description: </strong>Accent color</span>
		</div>
		<div class="row">
			<span>colorDark</span>
			<span>string</span>
			<span>#89baff</span>
			<span><strong>Description: </strong>Accent color in dark mode</span>
		</div>
		<div class="row">
			<span>transitionDuration</span>
			<span>number</span>
			<span>200</span>
			<span><strong>Description: </strong>Transition duration</span>
		</div>
	</div>
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
	}

	.widget {
		height: 300px;
		margin-bottom: 1rem;
	}
	.api > div {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		padding: 0.5rem;
	}
	.api .head {
		font-weight: bold;
		background-color: var(--tbl-head-bg-clr);
		border-radius: 5px 5px 0 0;
	}
	.api .row:nth-child(even) {
		background-color: var(--tbl-even-bg-clr);
	}
	.api .row:nth-child(odd) {
		background-color: var(--tbl-odd-bg-clr);
	}
	.api .row:hover {
		background-color: var(--tbl-row-hov-clr);
	}
	.api .row:last-child {
		border-radius: 0 0 5px 5px;
	}
	.api .row span:first-child {
		font-family: 'Courier New', Courier, monospace;
		color: var(--prop-clr);
	}
	.api .row span:first-child strong {
		font-family: inherit;
		color: var(--primary-clr);
	}
	.api .row span:nth-child(3) {
		color: var(--desc-clr);
		font-family: 'Courier New', Courier, monospace;
	}
	.api .row span:last-child {
		grid-area: 2/1/3/4;
		color: var(--desc-clr);
	}
</style>
