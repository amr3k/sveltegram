<script>
	import CodeBlock from '../Components/docs/CodeBlock.svelte';
	import Logo from '../Components/docs/Logo.svelte';

	/** @type {{ href: string, title: string, description: string }[]} */
	const components = [
		{
			href: '/post',
			title: 'Telegram post',
			description: 'Embed a telegram post widget in your svelte application.'
		},
		{
			href: '/discussions',
			title: 'Telegram discussion',
			description: 'Embed a telegram discussions widget in your svelte application.'
		},
		{
			href: '/login',
			title: 'Telegram login widget',
			description: 'Embed a telegram login button in your svelte application.'
		},
		{
			href: '/share',
			title: 'Telegram share button',
			description: 'Embed a telegram share button in your svelte application.'
		}
	];
</script>

<svelte:head>
	<title>Sveltegram | Reactive Telegram widgets built with svelte</title>
	<meta
		name="description"
		content="Sveltegram: Reactive, lightweight Telegram widgets for Svelte developers. Easily embed Telegram posts, discussions and login button in modern web apps"
	/>
</svelte:head>

<article class="page home">
	<header class="home-intro">
		<div class="home-mark">
			<Logo size={56} />
		</div>
		<h1 class="home-title">Sveltegram</h1>
		<p class="home-lede">Reactive Telegram widgets built with svelte</p>
	</header>

	<section class="home-section" aria-labelledby="install-title">
		<h2 id="install-title">Installation</h2>
		<CodeBlock code="npm install sveltegram" lang="bash" label="Terminal" compact />
	</section>

	<section class="home-section" aria-labelledby="components-title">
		<h2 id="components-title">Components</h2>
		<ul class="component-list">
			{#each components as component}
				<li>
					<a href={component.href}>
						<span class="component-copy">
							<span class="component-name">{component.title}</span>
							<span class="component-description">{component.description}</span>
						</span>
						<svg class="component-arrow" viewBox="0 0 20 20" aria-hidden="true" focusable="false">
							<path d="M4 10h11M11 5l5 5-5 5" />
						</svg>
					</a>
				</li>
			{/each}
		</ul>
	</section>
</article>

<style>
	.home-intro {
		max-width: 760px;
		padding-top: clamp(8px, 4vh, 44px);
	}

	.home-mark {
		margin-bottom: 22px;
		color: var(--stamp-strong);
	}

	.home-title {
		font-size: clamp(58px, 10vw, 104px);
		font-weight: 740;
		line-height: 0.9;
		letter-spacing: -0.055em;
	}

	.home-lede {
		max-width: 24ch;
		margin-top: 20px;
		color: var(--ink-soft);
		font-size: clamp(19px, 2.2vw, 26px);
		font-weight: 400;
		line-height: 1.22;
		letter-spacing: -0.025em;
		text-wrap: pretty;
	}

	.home-section {
		max-width: 760px;
		margin-top: clamp(48px, 8vh, 84px);
	}

	.home-section > h2 {
		margin-bottom: 14px;
		font-size: 15px;
		font-weight: 700;
		letter-spacing: -0.01em;
	}

	.component-list {
		margin: 0;
		padding: 0;
		border-top: 1px solid var(--line-strong);
		list-style: none;
	}

	.component-list li {
		border-bottom: 1px solid var(--line);
	}

	.component-list a {
		display: grid;
		grid-template-columns: minmax(0, 1fr) auto;
		gap: 20px;
		align-items: center;
		padding: 20px 4px;
		color: var(--ink);
		text-decoration: none;
		transition: background-color 140ms ease;
	}

	.component-list a:hover {
		background-color: color-mix(in srgb, var(--ink) 3%, transparent);
	}

	.component-name {
		display: block;
		font-size: 18px;
		font-weight: 680;
		letter-spacing: -0.025em;
	}

	.component-description {
		display: block;
		margin-top: 3px;
		color: var(--muted);
		font-size: 14px;
		line-height: 1.45;
	}

	.component-arrow {
		width: 20px;
		height: 20px;
		fill: none;
		stroke: var(--muted);
		stroke-width: 1.5;
		stroke-linecap: round;
		stroke-linejoin: round;
		transition:
			transform 140ms ease,
			stroke 140ms ease;
	}

	.component-list a:hover .component-arrow {
		transform: translateX(4px);
		stroke: var(--stamp);
	}

	@media (max-width: 600px) {
		.home-title {
			font-size: clamp(52px, 17vw, 72px);
		}

		.component-list a {
			padding: 17px 2px;
		}
	}
</style>
