import { browser } from '$app/env';
import { watchUnauthorized } from '#lib/session.svelte.ts';

export const prerender = true;

if (browser) watchUnauthorized();
