<script>
	/** @type {string}*/
	export let postLink;

	/** @type {boolean}*/
	export let avatar = true;

	/** @type {string}*/
	export let accentColor = '#2f81f6';

	/** @type {string}*/
	export let accentColorInDarkMode = '#89baff';

	/** @type {boolean}*/
	export let darkMode = false;

	const frameID = 'telegram-post-' + postLink.replace('https://t.me/', '').replace('/', '-');

	const userpic = avatar !== undefined ? `&userpic=${avatar}` : '';

	$: frameSource = `https://t.me/computly/188?embed=1${userpic}&dark=${darkMode}&color=${accentColor.replace(
		'#',
		''
	)}&dark_color=${accentColorInDarkMode.replace('#', '')}`;
</script>

<iframe
	id={frameID}
	src={frameSource}
	scrolling="no"
	style="overflow: hidden; border: medium none; min-width: 320px; height: 138px;"
	width="100%"
	height=""
	frameborder="0"
	title="Telegram post"
/>
