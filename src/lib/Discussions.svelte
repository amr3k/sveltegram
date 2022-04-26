<script>
	import { onMount } from 'svelte';

	/** @type {string}*/
	export let link;

	/** @type {string}*/
	export let color = '#2f81f6';

	/** @type {string}*/
	export let colorDark = '#89baff';

	/** @type {boolean}*/
	export let colorfulNames = false;

	/** @type {boolean}*/
	export let darkMode = false;

	/** @type {number}*/
	export let commentsLimit = 5;

	/** @type {number|undefined}*/
	export let height = undefined;

	/** @type {HTMLScriptElement}*/
	let script;
	$: telegramPost = link.replace('https://t.me/', '');

	/** @type {string}*/
	let iFrameSource;
	$: {
		iFrameSource = `${link}?embed=1&discussion=1&comments_limit=${commentsLimit}${
			darkMode ? '&dark=1' : ''
		}&color=${color.replace('#', '')}&dark_color=${colorDark.replace('#', '')}${
			colorfulNames ? '&colorful=1' : ''
		}${height ? `&height=${height}` : ''}`;
		iFrameStuff();
	}

	/** @type {HTMLDivElement}*/
	let div;

	const cleanStart = () => {
		try {
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
		} catch (e) {
			console.error(e);
		}
	};

	const iFrameStuff = () => {
		try {
			const iframe = div.getElementsByTagName('iframe')[0];
			if (iframe) {
				iframe.src = iFrameSource;
			}
		} catch (e) {
			// iFrame is not loaded yet
		}
	};

	onMount(() => {
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
