import { api } from '#lib/api/index.js';
import type { PageLoad } from './$types';

export const prerender = false;
export const ssr = false;

export const load: PageLoad = async ({ fetch }) => {
    const [notes, stats] = await Promise.all([api.notes.list(undefined, { fetch }), api.stats.list({ fetch })]);
    return { notes, stats };
};
