<div class="api">
	<h3>API</h3>
	<div class="head">
		<span>Property</span>
		<span>Type</span>
		<span>Default</span>
	</div>

	<div class="row">
		<span>link <strong>(required)</strong></span>
		<span>string</span>
		<span />
		<span
			><strong>Description: </strong>Telegram post link. You can copy it from telegram context menu</span
		>
	</div>
	<div class="row">
		<span>title</span>
		<span>string</span>
		<span>Telegram post from @username</span>
		<span><strong>Description: </strong>Iframe title attribute</span>
	</div>
	<div class="row">
		<span>darkMode</span>
		<span>boolean</span>
		<span>false</span>
		<span><strong>Description: </strong>Enable dark mode</span>
	</div>
	<div class="row">
		<span>Color</span>
		<span>string</span>
		<span>#2f81f6</span>
		<span><strong>Description: </strong>Accent color</span>
	</div>
	<div class="row">
		<span>colorDark</span>
		<span>string</span>
		<span>#89baff</span>
		<span><strong>Description: </strong>Accent color in dark mode</span>
	</div>
</div>

<style>
	.api > div {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		padding: 0.5rem;
	}
	.api .head {
		font-weight: bold;
		background-color: var(--tbl-head-bg-clr);
		border-radius: 5px 5px 0 0;
	}
	.api .row:nth-child(even) {
		background-color: var(--tbl-even-bg-clr);
	}
	.api .row:nth-child(odd) {
		background-color: var(--tbl-odd-bg-clr);
	}
	.api .row:hover {
		background-color: var(--tbl-row-hov-clr);
	}
	.api .row:last-child {
		border-radius: 0 0 5px 5px;
	}
	.api .row span:first-child {
		font-family: 'Courier New', Courier, monospace;
		color: var(--prop-clr);
	}
	.api .row span:first-child strong {
		font-family: inherit;
		color: var(--primary-clr);
	}
	.api .row span:nth-child(3) {
		color: var(--desc-clr);
		font-family: 'Courier New', Courier, monospace;
	}
	.api .row span:last-child {
		grid-area: 2/1/3/4;
		color: var(--desc-clr);
	}
</style>
