import { apiWith } from '#api';
import type { PageLoad } from './$types';

export const load: PageLoad = async (event) => {
    const api = apiWith(event);
    const id = event.params.id;
    const [task, comments, attachments, activity, members] = await Promise.all([
        api.tasks.get(id, { silent: true }),
        api.tasks.getComments(id, { silent: true }),
        api.tasks.getAttachments(id, { silent: true }),
        api.tasks.getActivity(id, { silent: true }),
        api.members.list()
    ]);
    return { task, comments, attachments, activity, members };
};
