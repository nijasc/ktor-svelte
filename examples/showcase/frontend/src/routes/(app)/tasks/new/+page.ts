import { apiWith } from '#api';
import type { PageLoad } from './$types';

export const load: PageLoad = async (event) => ({ members: await apiWith(event).members.list() });

export const _nav = { title: 'nav-new-task', icon: 'Plus', order: 2 };
