import { BOT_TOKEN } from '$env/static/private';
import { error, json } from '@sveltejs/kit';

/** @type {import('@sveltejs/kit').RequestHandler} */
export async function POST({ request }) {
	const body = await request.json();
	try {
		const message = 'Logged in to https://sveltegram.a3k.me successfully!';
		const res = await fetch(`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage?chat_id=${body.id}&text=${encodeURIComponent(message)}`);
		if (res.ok) {
			return json({ message });
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
