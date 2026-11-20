<script>
	import { onMount } from 'svelte';

	/**
	 * @type {{
	 * url: string; // Absolute URL to share
	 * comment?: string; // Text sent along with the link
	 * size?: 'medium' | 'large'; // Button size
	 * showText?: boolean; // Whether the button shows the "Share" label
	 * }}
	 */
	let { url, comment = '', size = 'medium', showText = true } = $props();

	/** @type {HTMLDivElement | undefined}*/
	let div = $state();

	/**
	 * Telegram builds the iframe source from the `data-*` attributes of the
	 * widget script. It is rebuilt here so props stay reactive, using the same
	 * attribute order and encoding so the initial iframe is not reloaded.
	 * @type {string}
	 */
	let embedSrc = $derived.by(() => {
		if (typeof window === 'undefined') {
			return '';
		}

		const origin =
			window.location.origin || `${window.location.protocol}//${window.location.hostname}`;
		let src = `https://t.me/share/embed?origin=${encodeURIComponent(
			origin
		)}&telegram-share-url=${encodeURIComponent(url)}`;

		if (comment) {
			src += `&comment=${encodeURIComponent(comment)}`;
		}
		if (size === 'large') {
			src += '&size=large';
		}
		if (!showText) {
			src += '&text=notext';
		}

		return src;
	});

	/** @type {number}*/
	let width = $derived(size === 'large' ? 76 : 60);
	/** @type {number}*/
	let height = $derived(size === 'large' ? 28 : 20);

	/**
	 * @param {string} src
	 * @param {number} w
	 * @param {number} h
	 */
	function syncIframe(src, w, h) {
		const iframe = div?.getElementsByTagName('iframe')[0];
		if (!iframe) {
			// The widget script hasn't run yet
			return;
		}

		if (!iframe.title) {
			iframe.title = 'Share on Telegram';
		}
		if (src && iframe.getAttribute('src') !== src) {
			iframe.src = src;
		}
		iframe.width = `${w}`;
		iframe.height = `${h}`;
	}

	function cleanStart() {
		try {
			if (div) {
				div.innerHTML = '';
				const script = document.createElement('script');
				script.src = 'https://telegram.org/js/telegram-widget.js?19';
				script.setAttribute('async', 'true');
				script.setAttribute('data-telegram-share-url', url);
				if (comment) {
					script.setAttribute('data-comment', comment);
				}
				if (size === 'large') {
					script.setAttribute('data-size', 'large');
				}
				if (!showText) {
					script.setAttribute('data-text', 'notext');
				}
				div.appendChild(script);
			}
		} catch (e) {
			console.error(e);
		}
	}

	$effect(() => {
		// Read every source before touching the DOM, so the effect keeps
		// tracking them even while the async widget script has no iframe yet.
		const src = embedSrc;
		const w = width;
		const h = height;
		syncIframe(src, w, h);
	});

	onMount(() => {
		cleanStart();

		// The widget script is async, so the iframe only shows up later
		const observer = new MutationObserver(() => syncIframe(embedSrc, width, height));
		if (div) {
			observer.observe(div, { childList: true });
		}

		return () => observer.disconnect();
	});
</script>

<div bind:this={div}></div>

<style>
	div {
		display: inline-flex;
		align-items: center;
	}
</style>
