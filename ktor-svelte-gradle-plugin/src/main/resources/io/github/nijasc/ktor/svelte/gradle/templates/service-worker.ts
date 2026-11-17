import { version } from '$app/env';
import { immutable } from '$app/manifest';

const worker = self as unknown as ServiceWorkerGlobalScope;
const cacheName = `ktor-svelte-${version}`;
const files = immutable.map(({ path }) => new URL(path, worker.registration.scope).pathname);
const assets = new Set(files);
const offlinePage = {{offlinePage}};

worker.addEventListener('install', (event) => {
    event.waitUntil(caches.open(cacheName).then((cache) => cache.addAll(files)));
});

worker.addEventListener('activate', (event) => {
    event.waitUntil(
        caches
            .keys()
            .then((keys) =>
                Promise.all(keys.filter((key) => key.startsWith('ktor-svelte-') && key !== cacheName).map((key) => caches.delete(key)))
            )
    );
});

worker.addEventListener('fetch', (event) => {
    const request = event.request;
    if (request.method !== 'GET') return;
    const url = new URL(request.url);
    if (url.origin !== worker.location.origin) return;
    if (request.mode === 'navigate') {
        event.respondWith(fetch(request).catch(() => offline()));
        return;
    }
    if (assets.has(url.pathname)) {
        event.respondWith(caches.match(request).then((cached) => cached ?? fetch(request)));
    }
});

function offline(): Response {
    return new Response(offlinePage, {
        status: 503,
        headers: { 'Content-Type': 'text/html; charset=utf-8', 'Cache-Control': 'no-store' }
    });
}
