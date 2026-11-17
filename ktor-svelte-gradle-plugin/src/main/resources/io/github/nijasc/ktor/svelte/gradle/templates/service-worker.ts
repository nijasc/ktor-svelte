/// <reference no-default-lib="true"/>
/// <reference lib="esnext" />
/// <reference lib="webworker" />
/// <reference types="@sveltejs/kit" />
import { build, version } from '$service-worker';

const worker = self as unknown as ServiceWorkerGlobalScope;
const cacheName = `ktor-svelte-${version}`;
const assets = new Set(build);
const offlinePage = {{offlinePage}};

worker.addEventListener('install', (event) => {
    event.waitUntil(caches.open(cacheName).then((cache) => cache.addAll(build)));
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
