import { apiWith, BoardLimits, cookies } from '#api';
import type { PageLoad } from './$types';

export const load: PageLoad = async (event) => {
    const api = apiWith(event);
    const [first, stats] = await Promise.all([api.tasks.list({ limit: BoardLimits.PAGE_SIZE, mine: cookies.boardMine.get() }), api.stats.list()]);
    return { first, stats };
};
