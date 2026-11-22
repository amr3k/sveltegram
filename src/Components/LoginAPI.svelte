<script>
	import ApiTable from './docs/ApiTable.svelte';

	const properties = [
		{
			name: 'username',
			type: 'string',
			required: true,
			description: 'Your bot username'
		},
		{
			name: 'authType',
			type: 'string',
			default: 'callback',
			description: 'How to authenticate users? Choices are "callback" or "redirect"'
		},
		{
			name: 'redirectURL',
			type: 'string',
			description:
				'In case you chose <code>redirect</code> as an authentication method, you must set this property'
		},
		{
			name: 'requestAccess',
			type: 'boolean',
			default: 'false',
			description: 'Whether you want to send messages to the user in the future.'
		},
		{
			name: 'size',
			type: 'string',
			default: 'medium',
			description: 'Login button size. choices are [small, medium,large]'
		},
		{
			name: 'buttonRadius',
			type: 'number',
			default: '10',
			description: 'Login button radius (in pixels)'
		},
		{
			name: 'onauth',
			type: 'Function',
			required: true,
			description: 'Callback function responsible for handling successful authentication'
		}
	];
</script>

<ApiTable docsHref="https://core.telegram.org/widgets/login" {properties} />
