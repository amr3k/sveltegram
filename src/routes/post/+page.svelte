<script>
	import Post from '#lib/Post.svelte';
	import PostAPI from '../../Components/PostAPI.svelte';
	import CodeBlock from '../../Components/docs/CodeBlock.svelte';
	import ThemeToggle from '../../Components/docs/ThemeToggle.svelte';
	import { postSnippet } from '../../Components/docs/snippets.js';

	let postLink = $state('https://t.me/computly/439');
	let postColor = $state('#2f81f6');
	let postColorDark = $state('#89baff');
	let darkMode = $state(false);

	let code = $derived(
		postSnippet({
			link: postLink,
			darkMode,
			color: postColor,
			colorDark: postColorDark
		})
	);
</script>

<svelte:head>
	<title>Telegram post | Sveltegram</title>
	<meta name="description" content="Embed a telegram post widget in your svelte application." />
</svelte:head>

<article class="page">
	<header class="page-head">
		<h1>Telegram post</h1>
		<p class="lede">Embed a telegram post widget in your svelte application.</p>
	</header>

	<section class="demo" aria-labelledby="demo-title">
		<div class="demo-head">
			<h2 id="demo-title">Demo</h2>
		</div>
		<div class="demo-grid">
			<div class="demo-stage">
				<Post link={postLink} {darkMode} color={postColor} colorDark={postColorDark} />
			</div>
			<div class="demo-controls">
				<label class="field">
					<span class="field-label">Link</span>
					<input type="text" bind:value={postLink} />
				</label>
				<ThemeToggle id="post-dark-switch" bind:dark={darkMode} />
				<label class="field">
					<span class="field-label">
						Accent color
						<code class="field-value">{postColor}</code>
					</span>
					<input type="color" bind:value={postColor} title={postColor} />
				</label>
				<label class="field">
					<span class="field-label">
						Accent color (Dark mode)
						<code class="field-value">{postColorDark}</code>
					</span>
					<input type="color" bind:value={postColorDark} title={postColorDark} />
				</label>
			</div>
		</div>
	</section>

	<section class="section">
		<h2>Code</h2>
		<CodeBlock {code} label="Svelte" />
	</section>

	<PostAPI />
</article>
