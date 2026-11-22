<script>
	/**
	 * @typedef {Object} ApiProperty
	 * @property {string} name
	 * @property {string} type
	 * @property {string} [default]
	 * @property {boolean} [required]
	 * @property {string} description
	 */

	/** @type {{ docsHref: string, properties: ApiProperty[] }} */
	let { docsHref, properties } = $props();
</script>

<section class="api" aria-labelledby="api-title">
	<div class="api-head">
		<h2 id="api-title">API</h2>
		<p>
			Please refer to <a href={docsHref} target="_blank" rel="noreferrer">Telegram documentation</a> for
			more details.
		</p>
	</div>

	<div class="api-table">
		<div class="api-columns" aria-hidden="true">
			<span>Property</span>
			<span>Type</span>
			<span>Default</span>
			<span>Description</span>
		</div>

		<dl class="api-list">
			{#each properties as property}
				<div class="api-row">
					<dt>
						<code>{property.name}</code>
						{#if property.required}
							<span class="api-required">required</span>
						{/if}
					</dt>
					<dd class="api-type"><code>{property.type}</code></dd>
					<dd class="api-default" class:api-default-empty={!property.default}>
						<code>{property.default ?? '—'}</code>
					</dd>
					<dd class="api-description">{@html property.description}</dd>
				</div>
			{/each}
		</dl>
	</div>
</section>
