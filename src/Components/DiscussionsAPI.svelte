<div class="api">
	<h3>API</h3>
	<p>
		Please refer to <a href="https://core.telegram.org/widgets/discussion" target="_blank"
			>Telegram documentation</a
		> for more details.
	</p>
	<div class="head">
		<span>Property</span>
		<span>Type</span>
		<span>Default</span>
	</div>

	<div class="row">
		<span>link <strong>(required)</strong></span>
		<span>string</span>
		<span />
		<span><strong>Description: </strong>Telegram post link. You can copy it from context menu</span>
	</div>
	<div class="row">
		<span>pageURL</span>
		<span>string</span>
		<span />
		<span
			><strong>Description: </strong>As shown in
			<a href="https://core.telegram.org/widgets/discussion">Telegram docs</a>, you can load
			comments dynamically if you have a channel that has discussions enabled and you post articles
			to it, you can set the <code>link</code> parameter to your channel link like
			<code>https://t.me/computly</code> and Telegram will automatically fetch the discussions
			belonging to current article, you still need to pass current page full URL so the widget can
			be reactive to things like theme changes, as well as setting canonical
			<code>&lt;link&gt;</code> tag with current page URL.</span
		>
	</div>
	<div class="row">
		<span>darkMode</span>
		<span>boolean</span>
		<span>false</span>
		<span><strong>Description: </strong>Enable dark mode</span>
	</div>
	<div class="row">
		<span>color</span>
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
	<div class="row">
		<span>colorfulNames</span>
		<span>boolean</span>
		<span>false</span>
		<span><strong>Description: </strong>Use different color for usernames</span>
	</div>
	<div class="row">
		<span>commentsLimit</span>
		<span>number</span>
		<span>5</span>
		<span><strong>Description: </strong>How many comments are displayed</span>
	</div>
	<div class="row">
		<span>height</span>
		<span>number</span>
		<span />
		<span
			><strong>Description: </strong>Widget height. The default value is 'auto' which is determined
			by Telegram</span
		>
	</div>
</div>
