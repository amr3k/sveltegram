<div class="api">
	<h3>API</h3>
	<p>
		Please refer to <a
			href="https://core.telegram.org/widgets/login"
			target="_blank"
			rel="noreferrer">Telegram documentation</a
		> for more details.
	</p>
	<div class="head">
		<span>Property</span>
		<span>Type</span>
		<span>Default</span>
	</div>

	<div class="row">
		<span>username <strong>(required)</strong></span>
		<span>string</span>
		<span></span>
		<span><strong>Description: </strong>Your bot username</span>
	</div>
	<div class="row">
		<span>authType</span>
		<span>string</span>
		<span>callback</span>
		<span
			><strong>Description: </strong>How to authenticate users? Choices are "callback" or "redirect"</span
		>
	</div>
	<div class="row">
		<span>redirectURL</span>
		<span>string</span>
		<span></span>
		<span
			><strong>Description: </strong>In case you chose <code>redirect</code> as an authentication method,
			you must set this property</span
		>
	</div>
	<div class="row">
		<span>requestAccess</span>
		<span>boolean</span>
		<span>false</span>
		<span
			><strong>Description: </strong>Whether you want to send messages to the user in the future.</span
		>
	</div>
	<div class="row">
		<span>size</span>
		<span>string</span>
		<span>medium</span>
		<span><strong>Description: </strong>Login button size. choices are [small, medium,large]</span>
	</div>
	<div class="row">
		<span>buttonRadius</span>
		<span>number</span>
		<span>10</span>
		<span><strong>Description: </strong>Login button radius (in pixels)</span>
	</div>
	<div class="row">
		<span>onauth <strong>(required)</strong></span>
		<span>Function</span>
		<span></span>
		<span
			><strong>Description: </strong>Callback function responsible for handling successful
			authentication</span
		>
	</div>
</div>
