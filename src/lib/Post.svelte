<script>
	import { fade } from 'svelte/transition';

	/** @type {string}*/
	export let link;

	/** @type {string}*/
	export let title = `Telegram post from @${link.replace('https://t.me/', '').split('/')[0]}`;

	/** @type {string}*/
	export let color = '#2f81f6';

	/** @type {string}*/
	export let colorDark = '#89baff';

	/** @type {boolean}*/
	export let darkMode = false;

	/** @type {number}*/
	export let transitionDuration = 200;

	const id = 'telegram-post-custom-' + link.replace('https://t.me/', '').replace('/', '-');

	$: src = `${link}?embed=1&dark=${darkMode}&color=${color.replace(
		'#',
		''
	)}&dark_color=${colorDark.replace('#', '')}`;
</script>

{#key src}
	<iframe {id} {src} {title} transition:fade={{ duration: transitionDuration }} />
{/key}

<style>
	iframe {
		width: 100%;
		height: var(--height, 200px);
		overflow: hidden;
		border: none;
	}
</style>
