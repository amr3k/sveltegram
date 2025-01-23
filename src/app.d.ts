import type { User } from '$lib/types/user';
/// <reference types="@sveltejs/kit" />

// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
declare namespace App {
	// interface Locals {}
	// interface Platform {}
	// interface Session {}
	// interface Stuff {}
}

declare global {
	interface Window {
		// eslint-disable-next-line no-unused-vars
		telegramCallback: (data: User) => void;
	}
}
