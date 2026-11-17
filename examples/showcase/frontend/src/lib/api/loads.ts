import { inlinePageData } from './client.js';
import { apiWith } from './services.js';

export async function loadTasksId(event: { fetch: typeof fetch; url: URL; params: { id: string } }) {
    const api = apiWith(event);
    const load = () =>
        Promise.all([
            api.tasks.get(event.params.id, { silent: true }),
            api.tasks.getComments(event.params.id, { silent: true }),
            api.tasks.getAttachments(event.params.id, { silent: true }),
            api.tasks.getActivity(event.params.id, { silent: true }),
            api.members.list({ silent: true })
        ]);
    const inline = inlinePageData(event.url.pathname);
    const [task, comments, attachments, activity, members] = inline
        ? ([inline.task, inline.comments, inline.attachments, inline.activity, inline.members] as Awaited<ReturnType<typeof load>>)
        : await load();
    return { task, comments, attachments, activity, members };
}
