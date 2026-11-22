/**
 * @param {{
 * link: string;
 * darkMode: boolean;
 * color: string;
 * colorDark: string;
 * }} options
 */
export function postSnippet({ link, darkMode, color, colorDark }) {
	return [
		'<script>',
		"  import { Post } from 'sveltegram';",
		'</script>',
		'',
		'<Post',
		`  link="${link}"`,
		...(darkMode ? ['  darkMode={true}'] : []),
		`  color="${color}"`,
		`  colorDark="${colorDark}"`,
		'/>'
	].join('\n');
}

/**
 * @param {{
 * link: string;
 * darkMode: boolean;
 * color: string;
 * colorDark: string;
 * colorfulNames: boolean;
 * commentsLimit: number | undefined;
 * height: number | undefined;
 * }} options
 */
export function discussionsSnippet({
	link,
	darkMode,
	color,
	colorDark,
	colorfulNames,
	commentsLimit,
	height
}) {
	/** @type {string[]} */
	const lines = [
		'<script>',
		"  import { Discussions } from 'sveltegram';",
		'</script>',
		'',
		'<Discussions',
		`  link="${link}"`
	];

	if (darkMode) {
		lines.push('  darkMode={true}');
	}

	lines.push(`  color="${color}"`, `  colorDark="${colorDark}"`);

	if (colorfulNames) {
		lines.push('  colorfulNames={true}');
	}

	lines.push(`  commentsLimit={${commentsLimit ?? 5}}`);

	if (height !== undefined) {
		lines.push(`  height={${height}}`);
	}

	lines.push('/>');

	return lines.join('\n');
}

/**
 * @param {string} username
 */
export function loginSnippet(username) {
	return [
		'<script>',
		"  import { Login } from 'sveltegram';",
		'</script>',
		'',
		'<Login',
		`  username="${username}"`,
		'  requestAccess={true}',
		'  onauth={(data) => { console.log("User ID:", data.id); }}',
		'/>'
	].join('\n');
}

/**
 * @param {{
 * url: string;
 * comment: string;
 * size: 'medium' | 'large';
 * showText: boolean;
 * }} options
 */
export function shareSnippet({ url, comment, size, showText }) {
	/** @type {string[]} */
	const lines = [
		'<script>',
		"  import { Share } from 'sveltegram';",
		'</script>',
		'',
		'<Share',
		`  url="${url}"`
	];

	if (comment) {
		lines.push(`  comment="${comment}"`);
	}

	lines.push(`  size="${size}"`);

	if (!showText) {
		lines.push('  showText={false}');
	}

	lines.push('/>');

	return lines.join('\n');
}
