import { apiWith } from '#api';
import type { PageLoad } from './$types';

export const load: PageLoad = async (event) => ({ members: await apiWith(event).members.list() });
