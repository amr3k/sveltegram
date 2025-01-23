<script>
	import Discussions from '$lib/Discussions.svelte';
	import Login from '$lib/Login.svelte';
	import Post from '$lib/Post.svelte';
	import { onMount } from 'svelte';
	import DiscussionsApi from '../Components/DiscussionsAPI.svelte';
	import LoginApi from '../Components/LoginAPI.svelte';
	import PostAPI from '../Components/PostAPI.svelte';
	import { theme } from '../store/theme';
	import GithubCorner from './_GithubCorner.svelte';

	// Post variables
	/** @type {string}*/
	let postLink = $state('https://t.me/computly/159');
	/** @type {string}*/
	let postColor = $state('#2f81f6');
	/** @type {string}*/
	let postColorDark = $state('#89baff');
	/** @type {boolean}*/
	let darkThemeCheckbox = $state(false);

	// Discussions variables
	/** @type {string}*/
	let discussionLink = $state('https://t.me/contest/198');
	/** @type {string}*/
	let discussionColor = $state('#2f81f6');
	/** @type {string}*/
	let discussionColorDark = $state('#89baff');
	/** @type {boolean}*/
	let discussionColorfulNames = $state(false);
	/** @type {number}*/
	let discussionCommentsLimit = $state(5);
	/** @type {number|undefined}*/
	let discussionHeight = $state();

	// Login variables
	/** @type {string}*/
	let loginUsername = 'ComputlyBot';

	async function telegramLogin(/** @type {import('../lib/types/user').user}*/ user) {
		const res = await fetch(window.location.origin + '/bot', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({
				id: user.id
			})
		});
		console.log(await res.json());
	}

	function switchTheme() {
		theme.set(darkThemeCheckbox ? 'dark' : 'light');
		darkThemeCheckbox
			? document.body.classList.add('dark')
			: document.body.classList.remove('dark');
	}
	onMount(() => {
		darkThemeCheckbox = $theme === 'dark';
		switchTheme();
	});
</script>

<svelte:head>
	<title>Sveltegram</title>
</svelte:head>
<GithubCorner --fill-color={darkThemeCheckbox ? '#26a457' : '#151513'} />
<h1>Installation</h1>
<pre class="language-bash"><code class="token builtin class-name">npm</code><code
		class="token function"> install </code><code class="token">sveltegram</code></pre>
<h1>Components</h1>
<h2>Telegram post</h2>
<div class="snippet">
	<h3>Code</h3>
	<pre class="language-js code-demo"><code class="token tag">&lt;script&gt;</code>
  <code class="token keyword keyword">import</code> <code class="token function"
			>&lbrace; Post &rbrace;</code
		> <code class="token keyword">from</code> <code class="token string">'sveltegram';</code>
<code class="token tag">&lt;/script&gt;</code>
<!-- I love pain -->
<code class="token tag">&lt;Post</code>
  <code class="token attr-name">link=</code><code class="token string">"{postLink}"</code
		>{#if $theme === 'dark'}<br />  <code class="token attr-name">darkMode=</code><code
				class="token builtin">&lbrace;true&rbrace;</code
			>{/if}
  <code class="token attr-name">color=</code><code class="token string">"{postColor}"</code>
  <code class="token attr-name">colorDark=</code><code class="token string">"{postColorDark}"</code>
<code class="token tag">/&gt;</code></pre>
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
		onchange={switchTheme}
	/>
	<label for="post-color"> Accent color </label>
	<input type="color" id="post-color" bind:value={postColor} title={postColor} />
	<label for="post-color2"> Accent color (Dark mode) </label>
	<input type="color" id="post-color2" bind:value={postColorDark} title={postColorDark} />
</div>

<div class="widget">
	<Post link={postLink} darkMode={$theme === 'dark'} color={postColor} colorDark={postColorDark} />
</div>
<PostAPI />

<h2>Telegram discussion</h2>
<h3>Code</h3>
<pre class="language-js code-demo"><code class="token tag">&lt;script&gt;</code>
  <code class="token keyword keyword">import</code> <code class="token function"
		>&lbrace; Discussions &rbrace;</code
	> <code class="token keyword">from</code> <code class="token string">'sveltegram';</code>
<code class="token tag">&lt;/script&gt;</code>
<!-- I love pain -->
<code class="token tag">&lt;Discussions</code>
  <code class="token attr-name">link=</code><code class="token string">"{discussionLink}"</code
	>{#if $theme === 'dark'}<br />  <code class="token attr-name">darkMode=</code><code
			class="token builtin">&lbrace;true&rbrace;</code
		>{/if}
  <code class="token attr-name">color=</code><code class="token string">"{discussionColor}"</code>
  <code class="token attr-name">colorDark=</code><code class="token string"
		>"{discussionColorDark}"</code
	>{#if discussionColorfulNames}<br />  <code class="token attr-name"
			>colorfulNames=<code class="token builtin">&lbrace;{discussionColorfulNames}&rbrace;</code
			></code
		>{/if}
  <code class="token attr-name"
		>commentsLimit=<code class="token builtin">&lbrace;{discussionCommentsLimit}&rbrace;</code
		></code
	>{#if discussionHeight}<br />  <code class="token attr-name"
			>height=<code class="token attr-builtin">&lbrace;{discussionHeight}&rbrace;</code></code
		>{/if}
<code class="token tag">/&gt;</code></pre>
<h3>Demo</h3>
<div class="controls">
	<label for="dis-link">Link</label>
	<input type="text" id="dis-link" bind:value={discussionLink} />
	<label for="post-dark-switch"> Dark mode </label>
	<input
		type="checkbox"
		id="post-dark-switch"
		bind:checked={darkThemeCheckbox}
		onchange={switchTheme}
	/>
	<label for="dis-color"> Accent color </label>
	<input type="color" id="dis-color" bind:value={discussionColor} title={discussionColor} />
	<label for="dis-color2"> Accent color (Dark mode) </label>
	<input
		type="color"
		id="dis-color2"
		bind:value={discussionColorDark}
		title={discussionColorDark}
	/>
	<label for="dis-colorful"> Colorful names </label>
	<input type="checkbox" id="dis-colorful" bind:checked={discussionColorfulNames} />
	<label for="dis-comments-limit">Comments limit</label>
	<input type="number" id="dis-comments-limit" min="1" bind:value={discussionCommentsLimit} />
	<label for="dis-height">Height</label>
	<input type="number" id="dis-height" bind:value={discussionHeight} />
</div>

<div class="widget">
	<Discussions
		link={discussionLink}
		darkMode={$theme === 'dark'}
		color={discussionColor}
		colorDark={discussionColorDark}
		colorfulNames={discussionColorfulNames}
		commentsLimit={discussionCommentsLimit}
		height={discussionHeight}
	/>
</div>
<DiscussionsApi />

<h2>Telegram login widget</h2>
<h3>Code</h3>
<pre class="language-js code-demo"><code class="token tag">&lt;script&gt;</code>
  <code class="token keyword keyword">import</code> <code class="token function"
		>&lbrace; Login &rbrace;</code
	> <code class="token keyword">from</code> <code class="token string">'sveltegram';</code>
<code class="token tag">&lt;/script&gt;</code>
<!-- I love pain -->
<code class="token tag">&lt;Login</code>
  <code class="token attr-name">username=</code><code class="token string">"{loginUsername}"</code
	><br />  <code class="token attr-name">requestAccess=</code><code class="token string"
		>&lbrace;<code class="token builtin class-name">true</code>&rbrace;</code
	><br />  <code class="token keyword keyword">on:</code><code class="token string">auth=</code
	>&lbrace;(<code class="token keyword keyword">data</code>) =&rsaquo; <code class="token tag"
		>&lbrace;</code
	> console.log(<code class="token keyword keyword">data</code>.user.id); <code class="token tag"
		>&rbrace;</code
	>&rbrace;
<code class="token tag">/&gt;</code></pre>
<h3>Demo</h3>

<div class="widget">
	<Login username={loginUsername} requestAccess={true} onauth={telegramLogin} />
</div>
<LoginApi />

<style>
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
		/* border-radius: 5px;
		border: none;
		outline: none; */
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
	.code-demo {
		height: 250px;
		overflow: auto;
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
