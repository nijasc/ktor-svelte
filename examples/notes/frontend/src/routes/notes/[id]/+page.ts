import { error } from '@sveltejs/kit';
import { api, isApiError } from '#lib/api/index.js';
import type { PageLoad } from './$types';

export const prerender = false;
export const ssr = false;

export const load: PageLoad = async ({ fetch, params }) => {
    try {
        return { note: await api.notes.get(params.id, { fetch }) };
    } catch (failure) {
        if (isApiError(failure, 'notes.get')) error(failure.status, failure.body.message);
        throw failure;
    }
};
