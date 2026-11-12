import { error } from '@sveltejs/kit';
import { apiWith, isApiError } from '#api';
import type { PageLoad } from './$types';

export const load: PageLoad = async (event) => {
    try {
        return { users: await apiWith(event).admin.getUsers({ silent: true }) };
    } catch (cause) {
        if (isApiError(cause, 'admin.getUsers') && cause.status === 403) error(403, cause.body.message);
        throw cause;
    }
};
