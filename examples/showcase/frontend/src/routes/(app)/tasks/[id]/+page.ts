import { error } from '@sveltejs/kit';
import { ApiError, apiWith, type Problem } from '#api';
import type { PageLoad } from './$types';

export const load: PageLoad = async (event) => {
    const api = apiWith(event);
    const id = event.params.id;
    try {
        const [task, comments, attachments, activity, members] = await Promise.all([
            api.tasks.get(id, { silent: true }),
            api.tasks.getComments(id, { silent: true }),
            api.tasks.getAttachments(id, { silent: true }),
            api.tasks.getActivity(id, { silent: true }),
            api.members.list()
        ]);
        return { task, comments, attachments, activity, members };
    } catch (cause) {
        if (cause instanceof ApiError && cause.status === 404) error(404, (cause.body as Problem).message);
        throw cause;
    }
};
