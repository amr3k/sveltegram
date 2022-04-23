<script>
	import { fade } from 'svelte/transition';

	/** @type {string}*/
	export let link;

	/** @type {string}*/
	export let color = '#2f81f6';

	/** @type {string}*/
	export let colorDark = '#89baff';

	/** @type {boolean}*/
	export let darkMode = false;

	/** @type {number}*/
	export let transitionDuration = 200;

	const frameID = 'telegram-post-' + link.replace('https://t.me/', '').replace('/', '-');

	$: frameSource = `https://t.me/computly/188?embed=1&dark=${darkMode}&color=${color.replace(
		'#',
		''
	)}&dark_color=${colorDark.replace('#', '')}`;
</script>

{#key frameSource}
	<iframe
		id={frameID}
		src={frameSource}
		style="overflow: hidden; border: medium none; min-width: 320px; height: 138px;"
		title="Telegram post"
		transition:fade={{ duration: transitionDuration }}
	/>
{/key}

<style>
	iframe {
		width: 100%;
	}
</style>
