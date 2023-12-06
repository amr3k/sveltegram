import { BOT_WEBHOOK } from '$env/static/private';
import { error } from '@sveltejs/kit';

/** @type {import('@sveltejs/kit').RequestHandler} */
export async function POST({ request }) {
	const body = await request.json();
	try {
		const res = await fetch(`${BOT_WEBHOOK}/${body.id}`);
		if (res.ok) {
			return new Response(
				JSON.stringify({
					message: 'ok'
				})
			);
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
