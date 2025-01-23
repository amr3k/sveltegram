import { BOT_TOKEN } from '$env/static/private';
import { error, json } from '@sveltejs/kit';

/** @type {import('@sveltejs/kit').RequestHandler} */
export async function POST({ request }) {
	/** @type {import('../../lib/types/user').user}*/
	const body = await request.json();
	try {
		const message = [
			'<b>✅ Success!</b>',
			`You’ve successfully authenticated using Telegram Web Login. 🎉`,
			`Here are your details:`,
			`- <b>ID:</b> <code>${body.id}</code>`,
			`- <b>Username:</b> @${body.username}`,
			`Thank you for testing <a href="https://sveltegram.a3k.me">Sveltegram</a>! If you have any feedback, feel free to <a href="https://github.com/amr3k/sveltegram">reach out</a>`
		].join('\n');
		const res = await fetch(
			`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage?chat_id=${body.id}&parse_mode=HTML&text=${encodeURIComponent(message)}`
		);
		if (res.ok) {
			return json({ message: 'Message was sent successfully!' });
		} else {
			const _body = await res.json();
			console.error('Bot server error ', _body);
			throw error(500, `Error: ${res.status}`);
		}
	} catch (err) {
		console.error('backend error ', err);
		throw error(500, `${err}`);
	}
}
