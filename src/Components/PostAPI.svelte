<script>
	import ApiTable from './docs/ApiTable.svelte';

	const properties = [
		{
			name: 'link',
			type: 'string',
			required: true,
			description: 'Telegram post link. You can copy it from context menu'
		},
		{
			name: 'darkMode',
			type: 'boolean',
			default: 'false',
			description: 'Enable dark mode'
		},
		{
			name: 'color',
			type: 'string',
			default: '#2f81f6',
			description: 'Accent color'
		},
		{
			name: 'colorDark',
			type: 'string',
			default: '#89baff',
			description: 'Accent color in dark mode'
		}
	];
</script>

<ApiTable docsHref="https://core.telegram.org/widgets/post" {properties} />
