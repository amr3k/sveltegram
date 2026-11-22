<script>
	import { onMount } from 'svelte';

	/**
	 * @type {{
	 * link: string;
	 * pageURL?: string;
	 * color?: string;
	 * colorDark?: string;
	 * colorfulNames?: boolean;
	 * darkMode?: boolean;
	 * commentsLimit?: number;
	 * height?: number | undefined;
	 * }}
	 */
	let {
		link,
		pageURL = '',
		color = '#2f81f6',
		colorDark = '#89baff',
		colorfulNames = false,
		darkMode = false,
		commentsLimit = 5,
		height = undefined
	} = $props();

	/** @type {HTMLScriptElement | undefined}*/
	let script = $state();
	let telegramPost = $derived(link.replace('https://t.me/', ''));

	/** @type {string}*/
	let iFrameSource = $state('');
	$effect(() => {
		iFrameSource = `${link}?embed=1&discussion=1&page_url=${pageURL}&comments_limit=${commentsLimit}&dark=${darkMode}&color=${color.replace(
			'#',
			''
		)}&dark_color=${colorDark.replace('#', '')}${
			colorfulNames ? '&colorful=1' : ''
		}${height ? `&height=${height}` : ''}`;
		iFrameStuff();
	});

	/** @type {HTMLDivElement | undefined}*/
	let div = $state();

	function cleanStart() {
		try {
			if (div) {
				div.innerHTML = '';
				script = document.createElement('script');
				script.src = 'https://telegram.org/js/telegram-widget.js?19';
				script.setAttribute('async', 'true');
				script.setAttribute('data-telegram-discussion', telegramPost);
				script.setAttribute('data-color', color.replace('#', ''));
				script.setAttribute('data-dark-color', colorDark.replace('#', ''));
				script.setAttribute('data-colorful', `${colorfulNames ? '1' : '0'}`);
				script.setAttribute('data-dark', `${darkMode}`);
				script.setAttribute('data-comments-limit', `${commentsLimit}`);
				if (height !== undefined) {
					// The default height is set to "auto";
					script.setAttribute('data-height', `${height}`);
				}
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
				iframe.title = 'Telegram comments';
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
