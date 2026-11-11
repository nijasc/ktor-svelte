import { apiWith } from '#api';
import type { PageLoad } from './$types';

export const prerender = false;
export const ssr = false;

export const load: PageLoad = async (event) => {
    const api = apiWith(event);
    const [notes, stats] = await Promise.all([api.notes.list(), api.stats.list()]);
    return { notes, stats };
};
