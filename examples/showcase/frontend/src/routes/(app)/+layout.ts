import { redirect } from '@sveltejs/kit';
import { loadSession, session } from '#lib/session.svelte.ts';
import type { LayoutLoad } from './$types';

export const prerender = false;
export const ssr = false;

export const load: LayoutLoad = async () => {
    const user = session.user ?? (await loadSession());
    if (!user) redirect(307, '/login');
    return { user };
};
