<script>
	import Share from '#lib/Share.svelte';
	import ShareAPI from '../../Components/ShareAPI.svelte';
	import CodeBlock from '../../Components/docs/CodeBlock.svelte';
	import { shareSnippet } from '../../Components/docs/snippets.js';

	let shareURL = $state('https://sveltegram.a3k.me');
	let shareComment = $state('Telegram widgets for Svelte');
	/** @type {'medium' | 'large'} */
	let shareSize = $state('medium');
	let shareShowText = $state(true);

	let code = $derived(
		shareSnippet({
			url: shareURL,
			comment: shareComment,
			size: shareSize,
			showText: shareShowText
		})
	);
</script>

<svelte:head>
	<title>Telegram share button | Sveltegram</title>
	<meta name="description" content="Embed a telegram share button in your svelte application." />
</svelte:head>

<article class="page">
	<header class="page-head">
		<h1>Telegram share button</h1>
		<p class="lede">Embed a telegram share button in your svelte application.</p>
	</header>

	<section class="demo" aria-labelledby="demo-title">
		<div class="demo-head">
			<h2 id="demo-title">Demo</h2>
		</div>
		<div class="demo-grid">
			<div class="demo-stage">
				<Share url={shareURL} comment={shareComment} size={shareSize} showText={shareShowText} />
			</div>
			<div class="demo-controls">
				<label class="field">
					<span class="field-label">URL</span>
					<input type="text" bind:value={shareURL} />
				</label>
				<label class="field">
					<span class="field-label">Comment</span>
					<input type="text" bind:value={shareComment} />
				</label>
				<label class="field">
					<span class="field-label">Button size</span>
					<select bind:value={shareSize}>
						<option value="medium">Medium</option>
						<option value="large">Large</option>
					</select>
				</label>
				<label class="field field-inline">
					<span class="field-label">Show text</span>
					<input type="checkbox" bind:checked={shareShowText} />
				</label>
			</div>
		</div>
	</section>

	<section class="section">
		<h2>Code</h2>
		<CodeBlock {code} label="Svelte" />
	</section>

	<ShareAPI />
</article>
