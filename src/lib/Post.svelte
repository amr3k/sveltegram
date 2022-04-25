<script>
	import { onMount } from 'svelte';

	/** @type {string}*/
	export let link;

	/** @type {string}*/
	export let color = '#2f81f6';

	/** @type {string}*/
	export let colorDark = '#89baff';

	/** @type {boolean}*/
	export let darkMode = false;

	/** @type {HTMLDivElement}*/
	let div;
	/** @type {HTMLScriptElement}*/
	let script;
	const telegramPost = link.replace('https://t.me/', '');

	/** @type {string}*/
	let iFrameSource;

	$: {
		iFrameSource = `${link}?embed=1&dark=${darkMode}&color=${color.replace(
			'#',
			''
		)}&dark_color=${colorDark.replace('#', '')}`;
		iFrameStuff();
	}

	const cleanStart = () => {
		try {
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
