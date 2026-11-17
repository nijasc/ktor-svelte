import { apiWith } from './services.js';

export async function loadTasksId(event: { fetch: typeof fetch; params: { id: string } }) {
    const api = apiWith(event);
    const [task, comments, attachments, activity, members] = await Promise.all([
        api.tasks.get(event.params.id, { silent: true }),
        api.tasks.getComments(event.params.id, { silent: true }),
        api.tasks.getAttachments(event.params.id, { silent: true }),
        api.tasks.getActivity(event.params.id, { silent: true }),
        api.members.list({ silent: true })
    ]);
    return { task, comments, attachments, activity, members };
}
