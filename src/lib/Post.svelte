<script>
	/**
	 * @type {{
	 * link: string;
	 * color: string;
	 * colorDark: string;
	 * darkMode: boolean;
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
			if (div) {
				const iframe = div.getElementsByTagName('iframe')[0];
				if (iframe) {
					iframe.src = iFrameSource;
				}
			}
		} catch (e) {
			// iFrame is not loaded yet
		}
	}

	$effect(() => {
		cleanStart();
		iFrameStuff();
	});
</script>

<div bind:this={div} />

<style>
	div {
		width: 100%;
	}
</style>
