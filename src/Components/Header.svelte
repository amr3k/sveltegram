<header>
	<h1>Sveltegram</h1>
	<em>Reactive Telegram widgets built with svelte</em>
</header>

<style>
	header {
		text-align: center;
		margin-bottom: 2rem;
	}
	header h1 {
		background: linear-gradient(90deg, hsl(0, 100%, 50%), hsl(200, 100%, 40%));
		color: transparent;
		background-clip: text;
		-webkit-background-clip: text;
		font-size: clamp(24px, 10vw, 80px);
		font-weight: 900;
		letter-spacing: 0.02em;
	}
	header :is(:global(h1, p)) {
		margin: 0;
	}
</style>
