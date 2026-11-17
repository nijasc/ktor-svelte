import { api } from '#api';

export async function lastCommentsOfTasks(): Promise<string[]> {
    const page = await api.tasks.list({ fields: ['id', 'title'], include: ['lastComment'] });
    return page.items.map((task) => `${task.title}: ${task.lastComment?.body ?? ''}`);
}

export async function withoutRelations(): Promise<number[]> {
    const page = await api.tasks.list({ limit: 5 });
    const first = page.items[0];
    if (first) {
        // @ts-expect-error
        void first.lastComment;
    }
    return page.items.map((task) => task.id);
}
