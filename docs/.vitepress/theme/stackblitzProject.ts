const packageJson = `{
    "name": "ktor-svelte-snippet",
    "private": true,
    "type": "module",
    "scripts": {
        "dev": "vite"
    },
    "devDependencies": {
        "@sveltejs/vite-plugin-svelte": "^7.3.1",
        "svelte": "^5.57.3",
        "typescript": "^6.0.0",
        "vite": "^8.3.6"
    }
}
`;

const viteConfig = `import { svelte } from '@sveltejs/vite-plugin-svelte';
import { defineConfig } from 'vite';
import { fileURLToPath } from 'node:url';

export default defineConfig({
    plugins: [svelte()],
    resolve: {
        alias: { '#api': fileURLToPath(new URL('./src/lib/api/index.ts', import.meta.url)) }
    }
});
`;

const indexHtml = `<!doctype html>
<html lang="en">
    <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>ktor-svelte snippet</title>
        <style>
            body { font-family: system-ui, sans-serif; margin: 2rem; }
            input, textarea, button { font: inherit; }
            [role='alert'], .field-error { color: #c0392b; }
        </style>
    </head>
    <body>
        <p><strong>ktor-svelte snippet.</strong> The API runs as an in-memory mock of the notes example in <code>src/mock.ts</code>.</p>
        <div id="app"></div>
        <script type="module" src="/src/main.ts"></script>
    </body>
</html>
`;

const main = `import { mount } from 'svelte';
import { apiConfig } from '#api';
import { mockFetch } from './mock';
import App from './App.svelte';

apiConfig.fetch = mockFetch;

mount(App, { target: document.getElementById('app')! });
`;

const mock = `type Note = { id: number; title: string; body: string; tags: string[]; status: 'ACTIVE' | 'ARCHIVED'; icon: string; createdAt: string };

const notes = new Map<number, Note>();
let nextId = 1;

function add(title: string, body: string, tags: string[]) {
    const note: Note = { id: nextId++, title, body, tags, status: 'ACTIVE', icon: 'StickyNote', createdAt: new Date().toISOString() };
    notes.set(note.id, note);
    return note;
}

add('Welcome', 'This note comes from an in-memory mock of the notes API.', ['intro']);
add('Try it', 'Edit src/App.svelte and watch it reload.', ['intro']);

function json(status: number, body?: unknown): Response {
    return new Response(body === undefined ? null : JSON.stringify(body), {
        status,
        headers: body === undefined ? {} : { 'Content-Type': 'application/json' }
    });
}

function validate(input: { title?: string }): Record<string, string[]> | null {
    const title = input.title ?? '';
    if (title.length < 1) return { title: ['Must be at least 1 character.'] };
    if (title.length > 80) return { title: ['Must be at most 80 characters.'] };
    if (title.trim() === '') return { title: ['A note needs a title.'] };
    return null;
}

export async function mockFetch(input: RequestInfo | URL, init?: RequestInit): Promise<Response> {
    await new Promise((resolve) => setTimeout(resolve, 150));
    const url = new URL(typeof input === 'string' ? input : input instanceof URL ? input.href : input.url, location.origin);
    const method = (init?.method ?? 'GET').toUpperCase();
    const body = typeof init?.body === 'string' ? JSON.parse(init.body) : {};
    const [, api, resource, id, action] = url.pathname.split('/');
    if (api !== 'api') return json(404, { message: 'Not found.' });

    if (resource === 'stats' && method === 'GET') {
        const all = [...notes.values()];
        const tags: Record<string, number> = {};
        for (const tag of all.flatMap((note) => note.tags)) tags[tag] = (tags[tag] ?? 0) + 1;
        return json(200, { total: all.length, archived: all.filter((note) => note.status === 'ARCHIVED').length, tags });
    }
    if (resource !== 'notes') return json(404, { message: 'Not found.' });

    if (id === undefined) {
        if (method === 'GET') {
            const search = url.searchParams.get('search')?.toLowerCase();
            return json(200, [...notes.values()].filter((note) => !search || note.title.toLowerCase().includes(search)));
        }
        if (method === 'POST') {
            const fields = validate(body);
            if (fields) return json(422, { message: 'Validation failed', fields });
            return json(201, add(body.title, body.body ?? '', body.tags ?? []));
        }
    }

    const note = notes.get(Number(id));
    if (!note) return json(404, { message: 'That note does not exist.' });
    if (action === 'archive' && method === 'POST') {
        note.status = 'ARCHIVED';
        return json(200, note);
    }
    if (action === undefined && method === 'GET') return json(200, note);
    if (action === undefined && method === 'DELETE') {
        notes.delete(note.id);
        return json(204);
    }
    if (action === undefined && method === 'PUT') {
        const fields = validate(body);
        if (fields) return json(422, { message: 'Validation failed', fields });
        Object.assign(note, { title: body.title, body: body.body ?? '', tags: body.tags ?? [] });
        return json(200, note);
    }
    return json(405, { message: 'Method not allowed.' });
}
`;

const icons = `export type LucideIconName = string;
`;

export function templateFiles(snippet: string): Record<string, string> {
    return {
        'package.json': packageJson,
        'vite.config.ts': viteConfig,
        'index.html': indexHtml,
        'src/main.ts': main,
        'src/mock.ts': mock,
        'src/App.svelte': snippet,
        'src/lib/ktor-svelte/icons.ts': icons
    };
}

export async function snippetProject(snippet: string): Promise<Record<string, string>> {
    const clientFiles = import.meta.glob('../../../examples/notes/frontend/src/lib/api/*.ts', {
        query: '?raw',
        import: 'default'
    }) as Record<string, () => Promise<string>>;
    const files = templateFiles(snippet);
    for (const [path, load] of Object.entries(clientFiles)) {
        files[`src/lib/api/${path.split('/').pop()}`] = await load();
    }
    return files;
}
