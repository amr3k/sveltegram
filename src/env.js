import { defineEnvVars } from '@sveltejs/kit/env';

export const variables = defineEnvVars({ BOT_TOKEN: { static: true } });
