<script>
	import { onMount } from 'svelte';

	/**
	 * @type {{
	 * username: string; // bot username
	 * size?: 'small'| 'medium'| 'large'; // Widget size
	 * authType?: 'callback' | 'redirect'; // Authorization type, Callback means that you will get an event containing user info when the user is logged in, you'll need to use on:auth to handle it. Redirect means that user will be redirected to the URL you specify in `redirectURL` parameter.
	 * redirectURL?: string; // If authType is set to redirect, this is the URL that user will be redirected to after logging in.
	 * requestAccess?: boolean; // If set to true, user will be asked to grant access to your bot, This is useful if you want your bot to be able to send messages to the user.
	 * buttonRadius?: number; // Button radius in pixels.
	 * onauth: (user: import('../lib/types/user').user) => void;
	 * }}
	 */
	let {
		username,
		size = 'medium',
		authType = 'callback',
		redirectURL = undefined,
		requestAccess = false,
		buttonRadius = 10,
		onauth
	} = $props();

	/** @type {HTMLDivElement | undefined}*/
	let div = $state();
	/** @type {HTMLScriptElement | undefined}*/
	let script = $state();

	function telegramCallback(/** @type {import('../lib/types/user').user}*/ user) {
		onauth(user);
	}
	function cleanStart() {
		try {
			if (div) {
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
			}
		} catch (e) {
			console.error(e);
		}
	}

	onMount(() => {
		if ('telegramCallback' in window) {
			window.telegramCallback = telegramCallback;
		}
		cleanStart();
	});
</script>

<div bind:this={div}></div>

<style>
	div {
		width: 100%;
		display: flex;
		justify-content: center;
	}
</style>
