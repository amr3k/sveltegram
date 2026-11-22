<script>
	import Discussions from '#lib/Discussions.svelte';
	import DiscussionsAPI from '../../Components/DiscussionsAPI.svelte';
	import CodeBlock from '../../Components/docs/CodeBlock.svelte';
	import ThemeToggle from '../../Components/docs/ThemeToggle.svelte';
	import { discussionsSnippet } from '../../Components/docs/snippets.js';

	let discussionLink = $state('https://t.me/contest/198');
	let discussionColor = $state('#2f81f6');
	let discussionColorDark = $state('#89baff');
	let discussionColorfulNames = $state(false);
	/** @type {number | undefined} */
	let discussionCommentsLimit = $state(5);
	/** @type {number | undefined} */
	let discussionHeight = $state();
	let darkMode = $state(false);

	let code = $derived(
		discussionsSnippet({
			link: discussionLink,
			darkMode,
			color: discussionColor,
			colorDark: discussionColorDark,
			colorfulNames: discussionColorfulNames,
			commentsLimit: discussionCommentsLimit,
			height: discussionHeight
		})
	);
</script>

<svelte:head>
	<title>Telegram discussion | Sveltegram</title>
	<meta
		name="description"
		content="Embed a telegram discussions widget in your svelte application."
	/>
</svelte:head>

<article class="page">
	<header class="page-head">
		<h1>Telegram discussion</h1>
		<p class="lede">Embed a telegram discussions widget in your svelte application.</p>
	</header>

	<section class="demo" aria-labelledby="demo-title">
		<div class="demo-head">
			<h2 id="demo-title">Demo</h2>
		</div>
		<div class="demo-grid">
			<div class="demo-stage">
				<Discussions
					link={discussionLink}
					{darkMode}
					color={discussionColor}
					colorDark={discussionColorDark}
					colorfulNames={discussionColorfulNames}
					commentsLimit={discussionCommentsLimit}
					height={discussionHeight}
				/>
			</div>
			<div class="demo-controls">
				<label class="field">
					<span class="field-label">Link</span>
					<input type="text" bind:value={discussionLink} />
				</label>
				<ThemeToggle id="discussion-dark-switch" bind:dark={darkMode} />
				<label class="field">
					<span class="field-label">
						Accent color
						<code class="field-value">{discussionColor}</code>
					</span>
					<input type="color" bind:value={discussionColor} title={discussionColor} />
				</label>
				<label class="field">
					<span class="field-label">
						Accent color (Dark mode)
						<code class="field-value">{discussionColorDark}</code>
					</span>
					<input type="color" bind:value={discussionColorDark} title={discussionColorDark} />
				</label>
				<label class="field field-inline">
					<span class="field-label">Colorful names</span>
					<input type="checkbox" bind:checked={discussionColorfulNames} />
				</label>
				<label class="field">
					<span class="field-label">Comments limit</span>
					<input type="number" min="1" step="1" bind:value={discussionCommentsLimit} />
				</label>
				<label class="field">
					<span class="field-label">Height</span>
					<input type="number" min="1" step="1" placeholder="Auto" bind:value={discussionHeight} />
				</label>
			</div>
		</div>
	</section>

	<section class="section">
		<h2>Code</h2>
		<CodeBlock {code} label="Svelte" />
	</section>

	<DiscussionsAPI />
</article>
