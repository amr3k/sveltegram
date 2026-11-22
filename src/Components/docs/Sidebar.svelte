<script>
	import { page } from '$app/state';
	import LinkIcon from './LinkIcon.svelte';
	import Logo from './Logo.svelte';

	const sections = [
		{
			label: 'Overview',
			items: [{ href: '/', label: 'Installation' }]
		},
		{
			label: 'Widgets',
			items: [
				{ href: '/post', label: 'Post' },
				{ href: '/discussions', label: 'Discussions' },
				{ href: '/login', label: 'Login' },
				{ href: '/share', label: 'Share' }
			]
		}
	];

	/** @type {{ href: string, label: string, icon: 'github' | 'npm' | 'telegram' }[]} */
	const links = [
		{ href: 'https://github.com/amr3k/sveltegram', label: 'GitHub', icon: 'github' },
		{ href: 'https://www.npmjs.com/package/sveltegram', label: 'npm', icon: 'npm' },
		{ href: 'https://core.telegram.org/widgets', label: 'Telegram widgets', icon: 'telegram' }
	];

	let menuOpen = $state(false);
	/** @type {HTMLDialogElement | undefined} */
	let menu = $state();

	/**
	 * @param {string} href
	 * @returns {boolean}
	 */
	function isActive(href) {
		if (href === '/') {
			return page.url.pathname === '/';
		}

		return page.url.pathname === href || page.url.pathname.startsWith(`${href}/`);
	}

	function openMenu() {
		if (!menu || menu.open) {
			return;
		}

		menu.showModal();
		menuOpen = true;
	}

	function closeMenu() {
		if (menu?.open) {
			menu.close();
		}
	}

	function handleClose() {
		menuOpen = false;
	}

	/** @param {MouseEvent} event */
	function handleBackdropClick(event) {
		if (event.target === menu) {
			closeMenu();
		}
	}

	$effect(() => {
		const pathname = page.url.pathname;
		if (pathname && menu?.open) {
			menu.close();
		}
	});

	$effect(() => {
		if (!menuOpen) {
			return;
		}

		const root = document.documentElement;
		const previous = root.style.overflow;
		root.style.overflow = 'hidden';

		return () => {
			root.style.overflow = previous;
		};
	});
</script>

{#snippet brand()}
	<a class="brand" href="/" aria-label="Sveltegram home" onclick={closeMenu}>
		<Logo size={22} />
		<span class="brand-name">sveltegram</span>
	</a>
{/snippet}

{#snippet navigation()}
	<nav class="nav" aria-label="Documentation">
		{#each sections as section (section.label)}
			<div class="nav-group">
				<p class="nav-title">{section.label}</p>
				<ul>
					{#each section.items as item (item.href)}
						<li>
							<a
								href={item.href}
								class:active={isActive(item.href)}
								aria-current={isActive(item.href) ? 'page' : undefined}
								onclick={closeMenu}
							>
								{item.label}
							</a>
						</li>
					{/each}
				</ul>
			</div>
		{/each}
	</nav>

	<div class="side-links">
		<p class="nav-title">Links</p>
		<ul>
			{#each links as link (link.href)}
				<li>
					<a href={link.href} target="_blank" rel="noreferrer">
						<span class="side-link-icon">
							<LinkIcon name={link.icon} />
						</span>
						<span>{link.label}</span>
					</a>
				</li>
			{/each}
		</ul>
	</div>

	<p class="colophon">
		<a href="https://github.com/amr3k/sveltegram/blob/main/LICENSE" target="_blank" rel="noreferrer"
			>MIT licensed</a
		>. Made by <a href="https://www.a3k.me/" target="_blank" rel="noreferrer">Amr</a>.
	</p>
{/snippet}

<div class="sidebar-frame">
	<div class="mobile-bar">
		{@render brand()}
		<button
			type="button"
			class="menu-button"
			onclick={openMenu}
			aria-haspopup="dialog"
			aria-expanded={menuOpen}
			aria-controls="mobile-navigation"
			aria-label="Open navigation"
		>
			<svg viewBox="0 0 20 20" aria-hidden="true" focusable="false">
				<path d="M3 5.5h14M3 10h14M3 14.5h14" />
			</svg>
		</button>
	</div>

	<aside class="sidebar">
		<div class="brand-lockup">
			{@render brand()}
			<p class="brand-tagline">Reactive Telegram widgets built with svelte</p>
		</div>
		{@render navigation()}
	</aside>

	<dialog
		id="mobile-navigation"
		bind:this={menu}
		class="drawer"
		aria-label="Site navigation"
		onclose={handleClose}
		onclick={handleBackdropClick}
	>
		<div class="drawer-top">
			{@render brand()}
			<button type="button" class="close-button" onclick={closeMenu} aria-label="Close navigation">
				<svg viewBox="0 0 20 20" aria-hidden="true" focusable="false">
					<path d="M5 5l10 10M15 5L5 15" />
				</svg>
			</button>
		</div>
		<div class="drawer-body">
			{@render navigation()}
		</div>
	</dialog>
</div>

<style>
	.sidebar-frame {
		min-width: 0;
	}

	.mobile-bar {
		display: none;
	}

	.sidebar {
		position: sticky;
		top: 0;
		display: flex;
		flex-direction: column;
		height: 100dvh;
		padding: 28px 20px 24px;
		border-right: 1px solid var(--line);
		background-color: var(--sheet);
		overflow-y: auto;
	}

	.brand-lockup {
		margin-bottom: 38px;
	}

	.brand {
		display: inline-flex;
		align-items: center;
		gap: 9px;
		color: var(--stamp-strong);
		text-decoration: none;
	}

	.brand:hover {
		color: var(--stamp);
	}

	.brand-name {
		color: var(--ink);
		font-size: 18px;
		font-weight: 720;
		letter-spacing: -0.035em;
		line-height: 1;
	}

	.brand-tagline {
		max-width: 21ch;
		margin-top: 10px;
		color: var(--muted);
		font-size: 12px;
		line-height: 1.45;
	}

	.nav {
		display: grid;
		gap: 26px;
	}

	.nav-group > ul,
	.side-links > ul {
		display: grid;
		gap: 2px;
		margin: 0;
		padding: 0;
		list-style: none;
	}

	.nav-title {
		margin-bottom: 7px;
		color: var(--muted);
		font-size: 11.5px;
		font-weight: 650;
		letter-spacing: 0.01em;
	}

	.nav a,
	.side-links a {
		display: flex;
		align-items: center;
		gap: 8px;
		padding: 7px 10px;
		margin-left: -10px;
		border-left: 2px solid transparent;
		border-radius: 0 3px 3px 0;
		color: var(--ink-soft);
		font-size: 14px;
		font-weight: 500;
		line-height: 1.35;
		text-decoration: none;
		transition:
			color 140ms ease,
			background-color 140ms ease,
			border-color 140ms ease;
	}

	.nav a:hover,
	.side-links a:hover {
		color: var(--ink);
		background-color: color-mix(in srgb, var(--ink) 4%, transparent);
	}

	.nav a.active {
		border-left-color: var(--stamp-strong);
		background-color: var(--stamp-soft);
		color: var(--stamp);
		font-weight: 650;
	}

	.side-links {
		margin-top: auto;
		padding-top: 36px;
	}

	.side-links a {
		font-size: 13px;
	}

	.side-link-icon {
		display: inline-flex;
		flex: none;
		color: var(--muted);
		transition: color 140ms ease;
	}

	.side-links a:hover .side-link-icon {
		color: var(--stamp);
	}

	.colophon {
		margin-top: 22px;
		color: var(--muted);
		font-size: 11.5px;
		line-height: 1.55;
	}

	.colophon a {
		color: var(--ink-soft);
		text-decoration-color: var(--line-strong);
	}

	.mobile-bar {
		position: fixed;
		top: 0;
		right: 0;
		left: 0;
		z-index: 30;
		align-items: center;
		justify-content: space-between;
		height: 60px;
		padding: 0 18px;
		border-bottom: 1px solid var(--line);
		background-color: color-mix(in srgb, var(--sheet) 94%, transparent);
		backdrop-filter: blur(10px);
	}

	.menu-button,
	.close-button {
		display: inline-flex;
		align-items: center;
		justify-content: center;
		width: 40px;
		height: 40px;
		padding: 0;
		border: 1px solid var(--line-strong);
		border-radius: 3px;
		background-color: var(--surface);
		color: var(--ink);
		transition:
			border-color 140ms ease,
			color 140ms ease;
	}

	.menu-button:hover,
	.close-button:hover {
		border-color: var(--stamp);
		color: var(--stamp);
	}

	.menu-button svg,
	.close-button svg {
		width: 18px;
		height: 18px;
		fill: none;
		stroke: currentColor;
		stroke-width: 1.6;
		stroke-linecap: round;
	}

	.drawer {
		position: fixed;
		inset: 0 auto 0 0;
		width: min(320px, 86vw);
		max-width: none;
		height: 100dvh;
		max-height: none;
		margin: 0;
		padding: 20px;
		border: 0;
		border-right: 1px solid var(--line);
		background-color: var(--sheet);
		color: var(--ink);
	}

	.drawer[open] {
		display: flex;
		flex-direction: column;
		animation: drawer-in 240ms cubic-bezier(0.16, 1, 0.3, 1);
	}

	.drawer::backdrop {
		background-color: rgb(4 11 18 / 0.58);
		backdrop-filter: blur(2px);
	}

	.drawer-top {
		display: flex;
		align-items: center;
		justify-content: space-between;
		margin-bottom: 28px;
	}

	.drawer-body {
		display: flex;
		flex: 1;
		flex-direction: column;
		overflow-y: auto;
	}

	@keyframes drawer-in {
		from {
			transform: translateX(-100%);
		}
	}

	@media (max-width: 900px) {
		.mobile-bar {
			display: flex;
		}

		.sidebar {
			display: none;
		}
	}
</style>
