import dotenv from 'dotenv'
dotenv.config()


/** @type {import('@sveltejs/kit').RequestHandler} */
export async function post({ request }) {
  const body = await request.json();
  try {
    const res = await fetch(`${process.env.BOT_WEBHOOK}/${body.id}`);
    if (res.ok) {
      return {
        status: 200,
        body: {
          message: 'Ok',
        }
      };
    } else {
      const _body = await res.json();
      console.error('Bot server error ', _body);
      return {
        status: 500,
        body: {
          message: `Error: ${res.status}`,
          details: _body,
        }
      };
    }
  } catch (err) {
    console.error('backend error ', err);
    return {
      status: 500,
      body: `${err}`
    }
  }
}