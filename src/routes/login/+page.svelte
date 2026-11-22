<script>
	import Login from '#lib/Login.svelte';
	import LoginAPI from '../../Components/LoginAPI.svelte';
	import CodeBlock from '../../Components/docs/CodeBlock.svelte';
	import { loginSnippet } from '../../Components/docs/snippets.js';

	const loginUsername = 'ComputlyBot';
	const code = loginSnippet(loginUsername);

	async function telegramLogin(/** @type {import('#lib/types/user.js').User} */ user) {
		const res = await fetch(window.location.origin + '/bot', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({
				id: user.id,
				username: user.username
			})
		});
		console.log(await res.json());
	}
</script>

<svelte:head>
	<title>Telegram login widget | Sveltegram</title>
	<meta name="description" content="Embed a telegram login button in your svelte application." />
</svelte:head>

<article class="page">
	<header class="page-head">
		<h1>Telegram login widget</h1>
		<p class="lede">Embed a telegram login button in your svelte application.</p>
	</header>

	<section class="demo" aria-labelledby="demo-title">
		<div class="demo-head">
			<h2 id="demo-title">Demo</h2>
		</div>
		<div class="demo-grid demo-grid--solo">
			<div class="demo-stage">
				<Login username={loginUsername} requestAccess={true} onauth={telegramLogin} />
			</div>
		</div>
	</section>

	<section class="section">
		<h2>Code</h2>
		<CodeBlock {code} label="Svelte" />
	</section>

	<LoginAPI />
</article>
