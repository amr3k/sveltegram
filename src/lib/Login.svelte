<script>
	import { createEventDispatcher, onMount } from 'svelte';

	/** @type {HTMLDivElement}*/
	let div;
	/** @type {HTMLScriptElement}*/
	let script;

	/** @type {string}
	 * Bot username
	 * */
	export let username = '';

	/** @type {string}
	 * Widget size.
	 * Must be one of: 'small', 'medium', 'large'
	 * Default is medium
	 */
	export let size = 'medium';

	/** @type {string}
	 * Authorization type.
	 * Must be one of: ('callback', 'redirect')
	 * Callback means that you will get an event containing user info when the user is logged in, you'll need to use on:auth to handle it.
	 * Redirect means that user will be redirected to the URL you specify in `redirectURL` parameter.
	 * Default is callback
	 * */
	export let authType = 'callback';

	/** @type {string}
	 * (Optional) Redirect URL
	 * If authType is set to redirect, this is the URL that user will be redirected to after logging in.
	 * Must be a valid URL in the format of `https://example.com/path/to/page`
	 * */
	export let redirectURL = '';

	/** @type {boolean}
	 * (Optional) Request access
	 * If set to true, user will be asked to grant access to your bot.
	 * This is useful if you want your bot to be able to send messages to the user.
	 * Default is false
	 */
	export let requestAccess = false;

	/** @type {number}
	 * Button radius in pixels.
	 * Default is 10.
	 */
	export let buttonRadius = 10;

	const dispatch = createEventDispatcher();

	function telegramCallback(/** @type {import('../lib/types/user').user}*/ user) {
		dispatch('auth', user);
	}
	function cleanStart() {
		try {
			div.innerHTML = '';
			script = document.createElement('script');
			script.src = 'https://telegram.org/js/telegram-widget.js?19';
			script.setAttribute('async', 'true');
			script.setAttribute('data-telegram-login', username);
			script.setAttribute('data-size', size);
			script.setAttribute('data-radius', `${buttonRadius}`);
			if (authType === 'callback') {
				script.setAttribute('data-onauth', 'window.telegramCallback(user)');
			} else if (authType === 'redirect') {
				if (!redirectURL) {
					throw new Error('Redirect URL is required if authType is set to redirect');
				}
				script.setAttribute('data-auth-url', redirectURL);
			}
			if (requestAccess) {
				script.setAttribute('data-request-access', 'write');
			}
			div.appendChild(script);
		} catch (e) {
			console.error(e);
		}
	}

	onMount(() => {
		// @ts-ignore
		window.telegramCallback = telegramCallback;
		cleanStart();
	});
</script>

<div bind:this={div} />

<style>
	div {
		width: 100%;
		display: flex;
		justify-content: center;
	}
</style>
