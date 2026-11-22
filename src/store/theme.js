import { writable } from 'svelte/store';

const STORAGE_KEY = 'sveltegram-theme';

/** @returns {'light' | 'dark'} */
function initialTheme() {
	if (typeof window === 'undefined') {
		return 'light';
	}

	const saved = (() => {
		try {
			return localStorage.getItem(STORAGE_KEY);
		} catch {
			return null;
		}
	})();

	if (saved === 'light' || saved === 'dark') {
		return saved;
	}

	return document.documentElement.classList.contains('dark') ? 'dark' : 'light';
}

export const theme = writable(initialTheme());

theme.subscribe((value) => {
	if (typeof document === 'undefined') {
		return;
	}

	document.documentElement.classList.toggle('dark', value === 'dark');
	try {
		localStorage.setItem(STORAGE_KEY, value);
	} catch {
		// Storage can be unavailable; the in-memory theme still applies.
	}
});
