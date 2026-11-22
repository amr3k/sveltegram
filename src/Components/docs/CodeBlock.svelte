<script>
	import { language as bashLanguage } from '@twinkleplop/bash';
	import { language as svelteLanguage } from '@twinkleplop/svelte';

	const highlightSvelte = svelteLanguage();
	const highlightBash = bashLanguage();

	/**
	 * @type {{
	 * code: string;
	 * lang?: 'svelte' | 'bash';
	 * label?: string;
	 * compact?: boolean;
	 * }}
	 */
	let { code, lang = 'svelte', label = 'Code', compact = false } = $props();

	/** @type {'idle' | 'copied' | 'failed'} */
	let status = $state('idle');
	/** @type {ReturnType<typeof setTimeout> | undefined} */
	let timer;

	let highlighted = $derived(
		lang === 'bash'
			? highlightBash(code, { line_numbers: false, attributes: { tabindex: 0 } })
			: highlightSvelte(code, { line_numbers: true, attributes: { tabindex: 0 } })
	);

	async function copyCode() {
		try {
			await navigator.clipboard.writeText(code);
			status = 'copied';
		} catch {
			status = 'failed';
		}

		if (timer) {
			clearTimeout(timer);
		}

		timer = setTimeout(() => {
			status = 'idle';
			timer = undefined;
		}, 2200);
	}

	$effect(() => {
		return () => {
			if (timer) {
				clearTimeout(timer);
			}
		};
	});
</script>

<div class="code-block" class:code-block--compact={compact}>
	<div class="code-bar">
		<span class="code-label">{label}</span>
		<button
			type="button"
			class="copy-button"
			onclick={copyCode}
			aria-label={status === 'copied'
				? 'Copied to clipboard'
				: status === 'failed'
					? 'Try copying again'
					: 'Copy code'}
		>
			{#if status === 'copied'}
				<svg viewBox="0 0 16 16" aria-hidden="true" focusable="false">
					<path d="M3.5 8.5l3 3 6-7" />
				</svg>
			{:else}
				<svg viewBox="0 0 16 16" aria-hidden="true" focusable="false">
					<rect x="5.5" y="5.5" width="7" height="8" rx="1" />
					<path d="M10.5 5.5V3.5a1 1 0 00-1-1h-6a1 1 0 00-1 1v8a1 1 0 001 1h2" />
				</svg>
			{/if}
			<span>{status === 'copied' ? 'Copied' : status === 'failed' ? 'Try again' : 'Copy'}</span>
		</button>
	</div>
	<div class="code-body">
		{@html highlighted}
	</div>
	<span class="sr-only" role="status" aria-live="polite">
		{status === 'copied'
			? 'Copied to clipboard'
			: status === 'failed'
				? 'Could not copy to clipboard'
				: ''}
	</span>
</div>
