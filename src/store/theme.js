import { writable } from 'svelte/store';

const ls = typeof window !== 'undefined' && localStorage.getItem('sveltegram-theme');

export const theme = writable(ls);

theme.subscribe((value) => {
	if (typeof window !== 'undefined') {
		localStorage.setItem('sveltegram-theme', `${value}`);
	}
});
