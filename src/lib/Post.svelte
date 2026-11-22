<script>
	import { onMount } from 'svelte';

	/**
	 * @type {{
	 * link: string;
	 * color?: string;
	 * colorDark?: string;
	 * darkMode?: boolean;
	 * }}
	 */
	let { link, color = '#2f81f6', colorDark = '#89baff', darkMode = false } = $props();

	/** @type {HTMLDivElement | undefined}*/
	let div = $state();
	/** @type {HTMLScriptElement | undefined}*/
	let script = $state();
	let telegramPost = $derived(link.replace('https://t.me/', ''));

	/** @type {string}*/
	let iFrameSource;

	$effect(() => {
		iFrameSource = `${link}?embed=1&dark=${darkMode}&color=${color.replace(
			'#',
			''
		)}&dark_color=${colorDark.replace('#', '')}`;
		iFrameStuff();
	});

	function cleanStart() {
		try {
			if (div) {
				div.innerHTML = '';
				script = document.createElement('script');
				script.src = 'https://telegram.org/js/telegram-widget.js?19';
				script.setAttribute('async', 'true');
				script.setAttribute('data-telegram-post', telegramPost);
				script.setAttribute('data-width', '100%');
				script.setAttribute('data-color', color.replace('#', ''));
				script.setAttribute('data-dark-color', colorDark.replace('#', ''));
				script.setAttribute('data-dark', `${darkMode}`);
				div.appendChild(script);
			}
		} catch (e) {
			console.error(e);
		}
	}

	function iFrameStuff() {
		try {
			if (!div || !iFrameSource) {
				return;
			}

			const iframe = div.getElementsByTagName('iframe')[0];
			if (iframe) {
				if (iframe.getAttribute('src') !== iFrameSource) {
					iframe.src = iFrameSource;
				}
				iframe.title = 'Telegram post';
			}
		} catch (e) {
			// iFrame is not loaded yet
		}
	}

	onMount(() => {
		cleanStart();
		iFrameStuff();

		// The Telegram script inserts its iframe asynchronously. Re-apply the
		// reactive source once it exists so theme changes made before load are
		// not lost.
		const observer = new MutationObserver(() => iFrameStuff());
		if (div) {
			observer.observe(div, { childList: true });
		}

		return () => observer.disconnect();
	});
</script>

<div bind:this={div}></div>

<style>
	div {
		width: 100%;
	}
</style>
