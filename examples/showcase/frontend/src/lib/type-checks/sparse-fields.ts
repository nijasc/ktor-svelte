import { api } from '#api';

export async function titlesOnly(): Promise<string[]> {
    const page = await api.tasks.list({ fields: ['id', 'title'] });
    const first = page.items[0];
    if (first) {
        // @ts-expect-error
        void first.status;
    }
    return page.items.map((task) => `${task.id} ${task.title}`);
}

export async function everyField(): Promise<string[]> {
    const page = await api.tasks.list({ limit: 5 });
    return page.items.map((task) => `${task.title} ${task.status} ${task.creator.name}`);
}
