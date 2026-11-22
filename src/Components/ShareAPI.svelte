<script>
	import ApiTable from './docs/ApiTable.svelte';

	const properties = [
		{
			name: 'url',
			type: 'string',
			required: true,
			description: 'Absolute URL of the page you want to share'
		},
		{
			name: 'comment',
			type: 'string',
			description: 'Text sent along with the link, the user can edit it before sending'
		},
		{
			name: 'size',
			type: 'string',
			default: 'medium',
			description: 'Button size. choices are [medium, large]'
		},
		{
			name: 'showText',
			type: 'boolean',
			default: 'true',
			description: 'Whether the button shows the "Share" label or only the Telegram logo'
		}
	];
</script>

<ApiTable docsHref="https://core.telegram.org/widgets/share" {properties} />
