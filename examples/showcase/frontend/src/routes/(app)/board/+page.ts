import { apiWith } from '#api';
import type { PageLoad } from './$types';

export const load: PageLoad = async (event) => {
    const api = apiWith(event);
    const [first, stats] = await Promise.all([api.tasks.list({ limit: '5' }), api.stats.list()]);
    return { first, stats };
};
