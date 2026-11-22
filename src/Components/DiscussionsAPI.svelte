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
			name: 'pageURL',
			type: 'string',
			description:
				'As shown in <a href="https://core.telegram.org/widgets/discussion">Telegram docs</a>, you can load comments dynamically if you have a channel that has discussions enabled and you post articles to it, you can set the <code>link</code> parameter to your channel link like <code>https://t.me/computly</code> and Telegram will automatically fetch the discussions belonging to current article, you still need to pass current page full URL so the widget can be reactive to things like theme changes, as well as setting canonical <code>&lt;link&gt;</code> tag with current page URL.'
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
		},
		{
			name: 'colorfulNames',
			type: 'boolean',
			default: 'false',
			description: 'Use different color for usernames'
		},
		{
			name: 'commentsLimit',
			type: 'number',
			default: '5',
			description: 'How many comments are displayed'
		},
		{
			name: 'height',
			type: 'number',
			description: "Widget height. The default value is 'auto' which is determined by Telegram"
		}
	];
</script>

<ApiTable docsHref="https://core.telegram.org/widgets/discussion" {properties} />
