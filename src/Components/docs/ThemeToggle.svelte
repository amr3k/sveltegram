<script>
	import { theme } from '../../store/theme';

	/**
	 * @type {{
	 * id: string;
	 * dark?: boolean;
	 * }}
	 */
	let { id, dark = $bindable(false) } = $props();

	$effect(() => {
		dark = $theme === 'dark';
	});
</script>

<label class="theme-toggle" for={id}>
	<span class="theme-toggle-label">Dark mode</span>
	<span class="switch">
		<input
			{id}
			type="checkbox"
			role="switch"
			bind:checked={dark}
			onchange={(event) => {
				const target = event.currentTarget;
				if (target instanceof HTMLInputElement) {
					theme.set(target.checked ? 'dark' : 'light');
				}
			}}
		/>
		<span class="switch-track" aria-hidden="true">
			<span class="switch-thumb"></span>
		</span>
	</span>
</label>

<style>
	.theme-toggle {
		display: flex;
		align-items: center;
		justify-content: space-between;
		gap: 12px;
		padding: 9px 11px;
		border: 1px solid var(--line);
		border-radius: 3px;
		background-color: var(--surface-muted);
		color: var(--ink-soft);
		font-size: 13px;
		font-weight: 600;
		cursor: pointer;
		transition:
			border-color 140ms ease,
			background-color 140ms ease;
	}

	.theme-toggle:hover {
		border-color: var(--line-strong);
	}

	.switch {
		position: relative;
		display: inline-flex;
		flex: none;
		align-items: center;
	}

	.switch input {
		position: absolute;
		width: 1px;
		height: 1px;
		opacity: 0;
	}

	.switch-track {
		position: relative;
		display: inline-block;
		width: 38px;
		height: 22px;
		border-radius: 999px;
		background-color: var(--line-strong);
		transition: background-color 160ms ease;
	}

	.switch-thumb {
		position: absolute;
		top: 3px;
		left: 3px;
		width: 16px;
		height: 16px;
		border-radius: 50%;
		background-color: #fff;
		box-shadow: 0 1px 2px rgb(0 0 0 / 0.18);
		transition: transform 160ms cubic-bezier(0.16, 1, 0.3, 1);
	}

	.switch input:checked + .switch-track {
		background-color: var(--stamp);
	}

	.switch input:checked + .switch-track .switch-thumb {
		transform: translateX(16px);
	}

	.switch input:focus-visible + .switch-track {
		outline: 2px solid var(--stamp);
		outline-offset: 3px;
	}
</style>
